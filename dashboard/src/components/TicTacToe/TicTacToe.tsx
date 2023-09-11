import React, { useState } from 'react';
import './TicTacToe.scss';

type Player = {
  name: string;
  mark: 'X' | 'O';
};

const TicTacToe: React.FC = () => {
  const [board, setBoard] = useState<Array<'X' | 'O' | null>>(
    Array(9).fill(null)
  );
  const [currentPlayer, setCurrentPlayer] = useState<Player>({
    name: 'Player 1',
    mark: 'X',
  });
  const [aiGame, setAiGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);

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

  const checkGameOver = (currentBoard: Array<'X' | 'O' | null>) => {
    for (let combination of winningCombinations) {
      if (
        currentBoard[combination[0]] &&
        currentBoard[combination[0]] === currentBoard[combination[1]] &&
        currentBoard[combination[1]] === currentBoard[combination[2]]
      ) {
        // Highlight the winning cells or display a message.
        setGameOver(true);
        return;
      }
    }

    if (currentBoard.every((cell) => cell !== null)) {
      // Handle tie scenario.
      setGameOver(true);
    }
  };

  const playTurn = (index: number) => {
    if (board[index] === null && !gameOver) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer.mark;
      setBoard(newBoard);
      checkGameOver(newBoard);
      if (aiGame) {
        switchPlayer();
        playAiTurn(newBoard);
      }
      switchPlayer();
    }
  };

  const playAiTurn = (currentBoard: Array<'X' | 'O' | null>) => {
    const emptyCells: number[] = [];
    currentBoard.forEach((cell, index) => {
      if (cell === null) {
        emptyCells.push(index);
      }
    });
    if (emptyCells.length > 0) {
      const randomIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];
      currentBoard[randomIndex] = currentPlayer.mark;
      setBoard(currentBoard);
      checkGameOver(currentBoard);
    }
  };

  const switchPlayer = () => {
    setCurrentPlayer((prev) =>
      prev.mark === 'X'
        ? { name: 'AI', mark: 'O' }
        : { name: 'Player 1', mark: 'X' }
    );
  };

  const startGame = (isAiGame: boolean) => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer({ name: 'Player 1', mark: 'X' });
    setAiGame(isAiGame);
    setGameOver(false);
  };

  const resetGame = () => {
    startGame(aiGame);
  };

  return (
    <div className='tic-tac-toe-container'>
      <h1>Tic Tac Toe</h1>
      <div>
        <button onClick={() => startGame(true)}>Play against AI</button>
        <button onClick={() => startGame(false)}>2 Player Game</button>
      </div>
      <div id='gameboard'>
        {board.map((cell, index) => (
          <div key={index} onClick={() => playTurn(index)}>
            {cell}
          </div>
        ))}
      </div>
      {gameOver && <div>Game Over!</div>}
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default TicTacToe;
