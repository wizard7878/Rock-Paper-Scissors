var scores = [0,0]
var oprations = ['stone','paper','scissors']
var obj = {
    stone:[null,0,1],
    paper:[1,null,0],
    scissors:[0,1,null]
}



document.querySelector('.opration .stone').style.display = "none"
document.querySelector('.opration .paper').style.display = "none"
document.querySelector('.opration .scissors').style.display = "none"




document.querySelector('.btn-new').addEventListener('click',()=>{
    document.querySelector('.opration .stone').style.display = "flex"
    document.querySelector('.opration .paper').style.display = "flex"
    document.querySelector('.opration .scissors').style.display = "flex"

    scores = [0,0]
    document.getElementById('score-0').textContent = 0
    document.getElementById('score-1').textContent = 0
    document.querySelector('.opration_two .images').src = `img/null.png`


    document.getElementById(`name-1`).textContent = "Player 2"
    document.getElementById(`name-1`).classList.remove('winner')

    document.getElementById(`name-0`).textContent = "Player 1"
    document.getElementById(`name-0`).classList.remove('winner')
})


document.querySelector('.opration .stone').addEventListener('click',()=>{
    
    ops('stone')

})

document.querySelector('.opration .paper').addEventListener('click',()=>{
    
    ops('paper')

})



document.querySelector('.opration .scissors').addEventListener('click',()=>{
    
    ops('scissors')

})

function ops(thing){
    var random_number = Math.floor(Math.random() * 3) + 1
    console.log(random_number - 1)
    
    document.querySelector('.opration_two .images').src = `img/${random_number-1}.png`
    document.querySelector('.opration_two .images').style.display = "flex"
    if(obj[thing][random_number - 1] === 1){
        scores[0] += 1
        document.getElementById('score-0').textContent = scores[0]
        if(scores[0] == 3){
            game_finished(0)
        }
        
    }
    else if (obj[thing][random_number - 1] === 0){
        scores[1] += 1
        document.getElementById('score-1').textContent = scores[1]
        if(scores[1] == 3){
            game_finished(1)
        }
        
    }
}


function game_finished(winner_id){
    document.getElementById(`name-${winner_id}`).textContent = "Winner"
    document.getElementById(`name-${winner_id}`).classList.add('winner')
    document.querySelector('.opration .stone').style.display = "none"
    document.querySelector('.opration .paper').style.display = "none"
    document.querySelector('.opration .scissors').style.display = "none"
        
}