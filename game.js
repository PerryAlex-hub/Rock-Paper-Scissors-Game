
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScore()



let moves;

let computerMove = ''

let result = ''


function calc(yourMove) {

  moves = Math.random()

  
if (moves >= 0 && moves < 1/3) {
  computerMove = 'rock'
}
else if(moves >= 1/3  && moves < 2/3) {
  computerMove = 'paper'
}
else if(moves >= 2/3 && moves <= 1) {
  computerMove = 'scissors'
}




// Result if you picked Rock 

if (yourMove === 'rock' && computerMove === 'rock') {
  result = 'Tie!'
}
else if (yourMove === 'rock' && computerMove === 'scissors') {
  result = 'You win!'
}
else if (yourMove === 'rock' && computerMove === 'paper') {
  result = 'You lose!'
}

// Result if you picked Scissors

if (yourMove === 'scissors' && computerMove === 'rock') {
  result = 'You lose!'
}
else if (yourMove === 'scissors' && computerMove === 'paper') {
  result = 'You win!'
}
else if (yourMove === 'scissors' && computerMove === 'scissors') {
  result = 'Tie!'
}


// Result if you picked Paper


if (yourMove === 'paper' && computerMove === 'paper') {
  result = 'Tie!'
}
else if (yourMove === 'paper' && computerMove === 'rock') {
  result = 'You win!'
}
else if (yourMove === 'paper' && computerMove === 'scissors') {
  result = 'You lose!'
}


// wins , losses, tie

if (result === 'You win!') {
  score.wins += 1
}
else if (result === 'You lose!') {
  score.losses +=1
}
else if (result === 'Tie!') {
  score.ties +=1
}



  //save result
  localStorage.setItem('score', JSON.stringify(score))


  updateScore()

  document.querySelector('.result').innerHTML = result

  document.querySelector('.move').innerHTML = ` You
    <img class="move-icon" src="images/${yourMove}-emoji.png" alt="">
    <img class="move-icon" src="images/${computerMove}-emoji.png" alt="">
    Computer`



}

  //updateScore

function updateScore() {
  document.querySelector('.score')
   .innerHTML = `Wins: ${score.wins} Losses: ${score.losses}, Ties: ${score.ties}`

   
}
