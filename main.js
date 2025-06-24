console.log("Hello World");

let humanScore = 0;
let cpuScore = 0;

const resultsDiv = document.querySelector(".results");
const scoreboardDiv = document.querySelector(".score");
const winnerDiv = document.querySelector(".winner");

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

// const userSelection = getHumanChoice();
// const cpuSelection = getComputerChoice();

// playRound(cpuSelection, userSelection);

function playRound(humanChoice) {
  let cpuChoice = getComputerChoice();

  winnerDiv.textContent = " ";
  const resultMsg = document.createElement("p");
  const roundResult = document.createElement("p");

  resultMsg.textContent = `You chose ${humanChoice}, Computer chose ${cpuChoice}`;

  if (humanChoice === cpuChoice) {
    roundResult.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && cpuChoice === "scissors") ||
    (humanChoice === "paper" && cpuChoice === "rock") ||
    (humanChoice === "scissors" && cpuChoice === "paper")
  ) {
    roundResult.textContent = "You win!";
    humanScore++;
  } else if (
    (cpuChoice === "rock" && humanChoice === "scissors") ||
    (cpuChoice === "paper" && humanChoice === "rock") ||
    (cpuChoice === "scissors" && humanChoice === "paper")
  ) {
    roundResult.textContent = "You lose!";
    cpuScore++;
  } else {
    roundResult.textContent = "Invalid input.";
    return;
  }

  resultsDiv.appendChild(resultMsg);
  resultsDiv.appendChild(roundResult);
  scoreboardDiv.textContent = `Score — You: ${humanScore} | Computer: ${cpuScore}`;

  if (humanScore === 5 || cpuScore === 5) {
    const winnerMsg =
      humanScore > cpuScore
        ? "🎉 You win the game!"
        : "😢 Computer wins the game!";
    winnerDiv.textContent = winnerMsg;

    document
      .querySelectorAll("button[data-choice]")
      .forEach((btn) => (btn.disabled = true));
  }
}

const gameButtons = document.querySelectorAll("button[data-choice]");
gameButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.getAttribute("data-choice");
    playRound(humanChoice);
  });
});
