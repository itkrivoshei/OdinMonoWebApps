// Gameboard Module
const Gameboard = (() => {
  let board = Array(9).fill(null);

  const getBoard = () => board;

  const setMark = (index, mark) => {
    board[index] = mark;
  };

  const resetBoard = () => {
    board = Array(9).fill(null);
  };

  return { getBoard, setMark, resetBoard };
})();

// Player Factory
const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;
  return { getName, getMark };
};

// DisplayController Module
const DisplayController = (() => {
  const gameboardDiv = document.querySelector('#gameboard');

  const render = () => {
    gameboardDiv.innerHTML = '';
    Gameboard.getBoard().forEach((cell, index) => {
      const cellDiv = document.createElement('div');
      cellDiv.textContent = cell || '';
      cellDiv.dataset.index = index;
      cellDiv.addEventListener('click', () => GameController.playTurn(index));
      gameboardDiv.appendChild(cellDiv);
    });
  };

  const highlightWinningCells = (combination) => {
    combination.forEach((index) => {
      document
        .querySelector(`div[data-index="${index}"]`)
        .classList.add('winner');
    });
  };

  const highlightTieCells = () => {
    Array.from(document.querySelectorAll('#gameboard div')).forEach((cell) => {
      cell.classList.add('tie');
    });
  };

  return { render, highlightWinningCells, highlightTieCells };
})();

// GameController Module
const GameController = (() => {
  let player1 = Player('Player 1', 'X');
  let player2 = Player('Player 2', 'O');
  let currentPlayer = player1;
  let aiGame = false;
  let gameOver = false;

  const startGame = (isAiGame = false) => {
    player1 = Player('Player 1', 'X');
    player2 = isAiGame ? Player('AI', 'O') : Player('Player 2', 'O');
    currentPlayer = player1;
    aiGame = isAiGame;
    gameOver = false;
    Gameboard.resetBoard();
    DisplayController.render();
    document.querySelector('#gameboard').classList.add('visible');
    document.getElementById('reset').classList.add('visible');
    if (aiGame) {
      document.getElementById('ai-game').classList.add('active-mod');
      document.getElementById('player-game').classList.remove('active-mod');
    } else {
      document.getElementById('player-game').classList.add('active-mod');
      document.getElementById('ai-game').classList.remove('active-mod');
    }
  };

  const playTurn = (index) => {
    if (Gameboard.getBoard()[index] === null && !gameOver) {
      Gameboard.setMark(index, currentPlayer.getMark());
      DisplayController.render();
      checkGameOver();
      if (aiGame) {
        switchPlayer();
        playAiTurn();
        checkGameOver();
      }
      switchPlayer();
    }
  };

  const playAiTurn = () => {
    let emptyCells = [];
    Gameboard.getBoard().forEach((cell, index) => {
      if (cell === null) {
        emptyCells.push(index);
      }
    });

    if (emptyCells.length > 0) {
      const randomIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      Gameboard.setMark(randomIndex, currentPlayer.getMark());
      DisplayController.render();
    }
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const checkGameOver = () => {
    const board = Gameboard.getBoard();
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combination of winningCombinations) {
      if (
        board[combination[0]] &&
        board[combination[0]] === board[combination[1]] &&
        board[combination[1]] === board[combination[2]]
      ) {
        // A player has won.
        DisplayController.highlightWinningCells(combination);
        gameOver = true;
        return;
      }
    }

    if (board.every((cell) => cell !== null)) {
      // The game is a tie.
      DisplayController.highlightTieCells();
      gameOver = true;
      return;
    }

    // The game is not over.
  };

  const resetGame = () => {
    startGame(aiGame);
  };

  return { playTurn, startGame, resetGame };
})();

// Initial render
window.addEventListener('DOMContentLoaded', (event) => {
  document
    .getElementById('ai-game')
    .addEventListener('click', () => GameController.startGame(true));
  document
    .getElementById('player-game')
    .addEventListener('click', () => GameController.startGame());
  document
    .querySelector('#reset')
    .addEventListener('click', GameController.resetGame);
});
