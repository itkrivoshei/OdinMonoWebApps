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

function playOneRound(weapon) {
  const computerSelection = getComputerChoice();
  const playerSelection = weapon.toUpperCase();

  if (playerSelection !== 'ROCK' && playerSelection !== 'PAPER' && playerSelection !== 'SCISSORS') {
    return console.warn('You should type: Rock, Paper or Scissors');
  }

  if (computerSelection === playerSelection) {
    return `\nTIE: between your ${playerSelection} and computer's ${computerSelection}`;
  } else if (
    (computerSelection === 'PAPER' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'ROCK' && playerSelection === 'PAPER') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'ROCK')
  ) {
    return `\nWIN: Machine died with ${computerSelection} in hands, you kill it with ${playerSelection.toUpperCase()}`;
  } else {
    return `\nLOOSE: You died with ${playerSelection} in your hands, computer kill you with ${computerSelection.toUpperCase()}`;
  }
}

function showStat(statDiv, roundResultText, gamesScore, computerScore, playerScore, ties) {
  statDiv.innerText = `${roundResultText}

  Game played: ${gamesScore}
  Ties: ${ties}
  You: ${playerScore}
  Computer: ${computerScore}`;
}

function getGameCode(gameLength, computerScore, playerScore, roundResultText) {
  if (playerScore !== gameLength && computerScore !== gameLength) {
    if (roundResultText.includes('WIN')) {
      return 1;
    } else if (roundResultText.includes('LOOSE')) {
      return 0;
    } else if (roundResultText.includes('TIE')) {
      return 3;
    }
  } else if (playerScore === gameLength || computerScore === gameLength) return 2;
}

function getFinalMessage(body, computerScore, playerScore) {
  let finalRes = document.createElement('div');

  if (computerScore > playerScore) {
    finalRes.innerText = '\n🤣🤣🤣\nYOU ARE LOOSER\n🤣🤣🤣';
  } else {
    finalRes.innerText = `\n🎉🎉🎉\nCONGRATULATION\n🎉🎉🎉`;
  }

  body.appendChild(finalRes);
}

function cleanGame(body, rock, paper, scissors) {
  body.removeChild(rock);
  body.removeChild(paper);
  body.removeChild(scissors);
}

function game() {
  let body = document.querySelector('body');
  let statDiv = document.createElement('div');

  let rock = document.createElement('button');
  let paper = document.createElement('button');
  let scissors = document.createElement('button');

  let computerScore = 0;
  let playerScore = 0;
  let ties = 0;
  let gamesScore = 0;

  rock.innerText = 'Rock';
  paper.innerText = 'Paper';
  scissors.innerText = 'Scissors';

  rock.addEventListener('click', () => gameCenter('rock'));
  paper.addEventListener('click', () => gameCenter('paper'));
  scissors.addEventListener('click', () => gameCenter('scissors'));

  body.appendChild(rock);
  body.appendChild(paper);
  body.appendChild(scissors);
  body.appendChild(statDiv);

  function gameCenter(weapon) {
    let roundResultText = playOneRound(weapon);
    let roundCode = getGameCode(5, computerScore, playerScore, roundResultText);

    if (roundCode === 1) {
      playerScore++;
      if (getGameCode(5, computerScore, playerScore, roundResultText) === 2) {
        getFinalMessage(body, computerScore, playerScore);
        cleanGame(body, rock, paper, scissors);
      }
    } else if (roundCode === 0) {
      computerScore++;
      if (getGameCode(5, computerScore, playerScore, roundResultText) === 2) {
        getFinalMessage(body, computerScore, playerScore);
        cleanGame(body, rock, paper, scissors);
      }
    } else if (roundCode === 3) {
      ties++;
    }

    gamesScore++;
    showStat(statDiv, roundResultText, gamesScore, computerScore, playerScore, ties);
  }
}

game();
