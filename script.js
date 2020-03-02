function computerPlay() {
    let outcomes = ["Rock", "Paper", "Scissors"];
    let number = Math.floor(Math.random() * 3);
    return outcomes[number];
}

// function playRound(playerSelection, computerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     computerSelection = computerSelection.toLowerCase();
//     switch(playerSelection) {
//         case "rock":
//             switch(computerSelection){
//                 case "rock":
//                     return "It's a tie!";
//                     break;
//                 case "paper":
//                     return "You lose! Paper beats Rock!";
//                     break;
//                 case "scissors":
//                     return "You win! Rock beats Scissors!";
//                     break;
//             }
//             break;
//         case "paper":
//             switch(computerSelection){
//                 case "rock":
//                     return "You win! Paper beats Rock!";
//                     break;
//                 case "paper":
//                     return "It's a tie!";
//                     break;
//                 case "scissors":
//                     return "You lose! Scissors beats Paper!";
//                     break;
//             }
//             break;
//         case "scissors":
//             switch(computerSelection){
//                 case "rock":
//                     return "You lose! Rock beats Scissors!";
//                     break;
//                 case "paper":
//                     return "You win! Scissors beats Paper!";
//                     break;
//                 case "scissors":
//                     return "It's a tie!";
//                     break;
                    
//             }
//             break;
//         default:
//             return "You have to choose Rock, Paper or Scissors!";
//     }
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let playerSelection = "";
//     for(let i = 1; i <= 5; i++) {
//         playerSelection = prompt("Rock, Paper or Scissors?");
//         computerSelection = computerPlay();
//         console.log(result = playRound(playerSelection, computerSelection));
//         if(result.search("win")){
//             playerScore++;
//         } else {
//             if(result.search("lose")) {
//                 computerScore++;
//             } else {
//                 playerScore++;
//                 computerScore++;
//             }
//         }
//     }
//     if(playerScore > computerScore) {
//         console.log("You won the game!");
//     } else {
//         if(playerScore < computerScore) {
//             console.log("You lost the game!");
//         } else {
//             console.log("The game is tied!");
//         }
//     }
// }

function getResult() {
    if(scores[0].textContent == "5" && scores[1].textContent == "5") {
        return "It's a tie!";
    } else {
        if(scores[0].textContent == "5") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
}

function checkIfGameIsOver() {
    scores.forEach(score => {
        if(score.textContent == "5") {
            result.textContent = getResult();
            buttons.forEach(button => button.style.display = "none");
            restart.style.display = "block";
        }
    }); 
}

function playRound(e) {

    const playerSelection = this.textContent;
    const computerSelection = computerPlay();
    if(playerSelection == computerSelection) {
        scores.forEach(score => score.textContent = String(Number(score.textContent) + 1));
    } else {
        if( (playerSelection == "Rock" && computerSelection == "Scissors") ||
                (playerSelection == "Paper" && computerSelection == "Rock") ||
                (playerSelection == "Scissors" && computerSelection == "Paper")) {
            scores[0].textContent = String(Number(scores[0].textContent) + 1);
        } else {
            scores[1].textContent = String(Number(scores[1].textContent) + 1);
        }
    }  

    checkIfGameIsOver();
}

function restartGame() {
    restart.style.display = "none";
    buttons.forEach(button => button.style.display = "inline");
    scores.forEach(score => score.textContent = "0");
    result.textContent = "";
}

const restart = document.querySelector("button.restart");
restart.style.display = "none";
restart.addEventListener("click", restartGame);

const scores = document.querySelectorAll("div.score p");
scores.forEach(score => score.textContent = "0");

const result = document.querySelector("div.result");

const buttons = document.querySelectorAll("div.options button");
buttons.forEach(button => button.addEventListener("click", playRound));

