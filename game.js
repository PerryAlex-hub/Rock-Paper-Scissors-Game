
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
  computerMove = 'Rock'
}
else if(moves >= 1/3  && moves < 2/3) {
  computerMove = 'Paper'
}
else if(moves >= 2/3 && moves <= 1) {
  computerMove = 'Scissors'
}




// Result if you picked Rock 

if (yourMove === 'rock' && computerMove === 'Rock') {
  result = 'Tie!'
}
else if (yourMove === 'rock' && computerMove === 'Scissors') {
  result = 'You win!'
}
else if (yourMove === 'rock' && computerMove === 'Paper') {
  result = 'You lose!'
}

// Result if you picked Scissors

if (yourMove === 'scissors' && computerMove === 'Rock') {
  result = 'You lose!'
}
else if (yourMove === 'scissors' && computerMove === 'Paper') {
  result = 'You win!'
}
else if (yourMove === 'scissors' && computerMove === 'Scissors') {
  result = 'Tie!'
}


// Result if you picked Paper


if (yourMove === 'paper' && computerMove === 'Paper') {
  result = 'Tie!'
}
else if (yourMove === 'paper' && computerMove === 'Rock') {
  result = 'You win!'
}
else if (yourMove === 'paper' && computerMove === 'Scissors') {
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
