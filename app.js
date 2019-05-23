let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(a){
  if(a=== "r") return "Rock";
  if(a === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)}  beats ${convertToWord(computerChoice)}. You Win!`;
  const user_div = document.getElementById(userChoice);
  user_div.classList.add('green-glow');
  setTimeout(() => user_div.classList.remove('green-glow'), 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lose...`;
  const user_div = document.getElementById(userChoice);
  user_div.classList.add('red-glow');
  setTimeout(() => user_div.classList.remove('red-glow'), 500);
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a DRAW!`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "sp":
    case "pr":
      win(userChoice,computerChoice);
      break;
    
    case "sr":
    case "ps":
    case "rp":
      lose(userChoice,computerChoice);
      break;

    case "rr":
    case "ss":
    case "pp":
      draw(userChoice,computerChoice);
  }
  const comp_div = document.getElementById(computerChoice);
  comp_div.classList.add('gray-glow');
  setTimeout(() => comp_div.classList.remove('gray-glow'), 500);
}

function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  } )

  paper_div.addEventListener('click', function() {
    game("p");
  } )

  scissors_div.addEventListener('click', function() {
    game("s");
   })
}

main();