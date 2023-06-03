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
  const player1 = Player('Player 1', 'X');
  const player2 = Player('Player 2', 'O');
  let currentPlayer = player1;

  const playTurn = (index) => {
    if (Gameboard.getBoard()[index] == null) {
      Gameboard.setMark(index, currentPlayer.getMark());
      DisplayController.render();
      checkGameOver();
      switchPlayer();
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

  return { playTurn };
})();

// Initial render
window.addEventListener('DOMContentLoaded', (event) => {
  DisplayController.render();
  document.querySelector('#reset').addEventListener('click', () => {
    Gameboard.resetBoard();
    DisplayController.render();
  });
});
