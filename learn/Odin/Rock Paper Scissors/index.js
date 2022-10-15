function getComputerChoice() {
  let weaponNum = Math.floor(Math.random() * 3 + 1);

  if (weaponNum === 1) {
    return 'ROCK';
  } else if (weaponNum === 2) {
    return 'PAPER';
  } else {
    return 'SCISSORS';
  }
}

function playOneRound() {
  const computerSelection = getComputerChoice();
  const playerSelection = prompt('Type: Rock, Paper or Scissors').toUpperCase();

  if (
    playerSelection !== 'ROCK' &&
    playerSelection !== 'PAPER' &&
    playerSelection !== 'SCISSORS'
  ) {
    return console.warn('You should type: Rock, Paper or Scissors');
  }

  if (computerSelection === playerSelection) {
    return `TIE: between your ${playerSelection} and computer's ${computerSelection}`;
  } else if (
    (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'ROCK' && playerSelection === 'PAPER') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'ROCK')
  ) {
    return `WIN: Machine died with ${computerSelection} in hands, you kill it with ${playerSelection.toUpperCase()}`;
  } else {
    return `LOOSE: You died with ${playerSelection} in your hands, computer kill you with ${computerSelection.toUpperCase()}`;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (; playerScore !== 5 && computerScore !== 5; ) {
    let roundResult = playOneRound();

    if (roundResult?.includes('WIN')) {
      playerScore++;
    } else if (roundResult?.includes('LOOSE')) {
      computerScore++;
    } else if (!roundResult) {
      continue;
    }

    console.log(
      `${roundResult}\n SCORE: COMPUTER - ${computerScore} | YOU - ${playerScore}`
    );
  }

  if (computerScore > playerScore) {
    return '🤣🤣🤣\n\nYOU ARE LOOSER\n\n🤣🤣🤣';
  } else {
    return `🎉🎉🎉\n\nCONGRATULATION\n\n🎉🎉🎉`;
  }
}

console.log(game());
