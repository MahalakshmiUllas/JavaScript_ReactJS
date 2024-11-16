//my 1st game 
const options = ["rock", "paper", "scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let playerPoints = 0;
let computerPoints = 0;

function playYourGame(playerOption){
  const computerOption = options[Math.floor(Math.ramdom() * 3)];
  //console.log(computerOption);
  let result = "";

  if(playerOption === computerOption){
      result = "Its a tie";
  }
  else{
    switch(playerOption){
      case "rock":
        result = (computerOption === "scissors") ? "You Won!" : "You Lost!";
        break;
        case "paper":
          result = (computerOption === "rock") ? "You Won!" : "You Lost!";
          break;
        case "scissors":
          result = (computerOption === "paper") ? "You Won!" : "You Lost!";
          break;
    }
  }

  player.textContent = `Player: ${playerOption}`;
  computer.textContent = `Computer: ${computerOption}`;
  result.textContent = result;

  result.classList.remove("greenText", "redText");

  switch(result){
    case "You Won!":
      result.classList.add("greenText");
      playerPoints++;
      playerScore.textContent = playerPoints;
      break;
    case "You Lost!":
      result.classList.add("redText");
      computerPoints++;
      computerScore.textContent = computerPoints;
      break;
  }
}









