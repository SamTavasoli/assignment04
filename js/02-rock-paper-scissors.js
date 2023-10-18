// User choice
let userChoice

while (true) {
 userChoice = prompt("Please choose  one of these three options: Rock, Paper, or Scissors");
 userChoice = userChoice.toLowerCase();

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        break;
    } else {
        alert ("invalid choice!, Yoy only can choose one of these three options: Rock, Paper, or Scissors ")
    }
}
    

// Computer choice
let computerChoice = Math.random() * 100;

if (computerChoice < 33) {
    computerChoice = "Rock";
} else if (computerChoice < 66) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}


// Who  wins

let result;

if (userChoice === computerChoice) {
    result = "It's a Tie";
    }
else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")) 
    {
        result = `You Won! ${userChoice} defeated ${computerChoice}.`;
    }
else {
    result = `Compute Won! ${computerChoice} defeated ${userChoice}.`
}

alert (result);
