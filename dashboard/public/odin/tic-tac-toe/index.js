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
      cellDiv.addEventListener('click', () => GameController.playTurn(index));
      gameboardDiv.appendChild(cellDiv);
    });
  };

  return { render };
})();

// GameController Module
const GameController = (() => {
  let player1 = Player('Player 1', 'X');
  let player2 = Player('Player 2', 'O');
  let currentPlayer = player1;
  let aiGame = false;

  const startGame = (isAiGame = false) => {
    player1 = Player('Player 1', 'X');
    player2 = isAiGame ? Player('AI', 'O') : Player('Player 2', 'O');
    currentPlayer = player1;
    aiGame = isAiGame;
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
    if (Gameboard.getBoard()[index] === null) {
      Gameboard.setMark(index, currentPlayer.getMark());
      DisplayController.render();
      checkGameOver();
      if (aiGame) {
        playAiTurn();
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
    switchPlayer();

    if (emptyCells.length > 0) {
      const randomIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      Gameboard.setMark(randomIndex, currentPlayer.getMark());
      DisplayController.render();
      checkGameOver();
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
        alert(`Player with mark ${board[combination[0]]} has won!`);
        Gameboard.resetBoard();
        DisplayController.render();
        return;
      }
    }

    if (board.every((cell) => cell !== null)) {
      // The game is a tie.
      alert('The game is a tie!');
      Gameboard.resetBoard();
      DisplayController.render();
      return;
    }

    // The game is not over.
  };

  return { playTurn, startGame };
})();

// Initial render
window.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('ai-game').addEventListener('click', () => {
    GameController.startGame(true);
  });
  document.getElementById('player-game').addEventListener('click', () => {
    GameController.startGame();
  });
  document.querySelector('#reset').addEventListener('click', () => {
    Gameboard.resetBoard();
    DisplayController.render();
  });
});
