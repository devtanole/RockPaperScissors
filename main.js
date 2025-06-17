console.log("Hello World");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let userChoice = prompt("Rock, Paper, Scissors?");
  return userChoice;
}

// const userSelection = getHumanChoice();
// const cpuSelection = getComputerChoice();

// playRound(cpuSelection, userSelection);

function playGame() {
  let humanScore = 0;
  let cpuScore = 0;

  function playRound(getComputerChoice, getHumanChoice) {
    let cpuChoice = getComputerChoice;
    let humanChoice = getHumanChoice;

    console.log(`user: ${humanChoice}`);
    console.log(`CPU: ${cpuChoice}`);

    if (humanChoice === cpuChoice) {
      console.log("It's a tie!");
    } else if (
      (humanChoice === "rock" && cpuChoice === "scissors") ||
      (humanChoice === "paper" && cpuChoice === "rock") ||
      (humanChoice === "scissors" && cpuChoice === "paper")
    ) {
      console.log("You win!");
      humanScore++;
    } else if (
      (cpuChoice === "rock" && humanChoice === "scissors") ||
      (cpuChoice === "paper" && humanChoice === "rock") ||
      (cpuChoice === "scissors" && humanChoice === "paper")
    ) {
      console.log("You lose!");
      cpuScore++;
    } else {
      console.log("Invalid input.");
      return;
    }
  }
  for (let i = 0; i < 5; i++) {
    const userInput = prompt(
      "Round " + (i + 1) + ": Type rock, paper, or scissors"
    );
    const userChoice = userInput.toLowerCase();
    const computerChoice = getComputerChoice();

    playRound(computerChoice, userChoice);
    console.log("Score — You: " + humanScore + " | Computer: " + cpuScore);
    console.log("--------------------------------");
  }

  // Final result
  console.log("Final Score — You: " + humanScore + " | Computer: " + cpuScore);

  if (humanScore > cpuScore) {
    console.log("🎉 You win the game!");
  } else if (cpuScore > humanScore) {
    console.log("😢 Computer wins the game!");
  } else {
    console.log("🤝 It's a tie overall!");
  }
}
playGame();
