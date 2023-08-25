import React, { useState } from 'react';

type Weapon = 'ROCK' | 'PAPER' | 'SCISSORS';

interface GameState {
  gamesPlayed: number;
  ties: number;
  playerScore: number;
  computerScore: number;
  message: string;
}

export const RockPaperScissors: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    gamesPlayed: 0,
    ties: 0,
    playerScore: 0,
    computerScore: 0,
    message: '',
  });

  const getComputerChoice = (): Weapon => {
    let weaponNum = Math.floor(Math.random() * 3 + 1);

    switch (weaponNum) {
      case 1:
        return 'ROCK';
      case 2:
        return 'PAPER';
      default:
        return 'SCISSORS';
    }
  };

  const playOneRound = (playerWeapon: Weapon) => {
    const computerWeapon = getComputerChoice();
    if (computerWeapon === playerWeapon) {
      setGameState((prev) => ({
        ...prev,
        ties: prev.ties + 1,
        gamesPlayed: prev.gamesPlayed + 1,
        message: `TIE: between your ${playerWeapon} and computer's ${computerWeapon}`,
      }));
    } else if (
      (computerWeapon === 'PAPER' && playerWeapon === 'SCISSORS') ||
      (computerWeapon === 'ROCK' && playerWeapon === 'PAPER') ||
      (computerWeapon === 'SCISSORS' && playerWeapon === 'ROCK')
    ) {
      setGameState((prev) => ({
        ...prev,
        playerScore: prev.playerScore + 1,
        gamesPlayed: prev.gamesPlayed + 1,
        message: `WIN: Machine died with ${computerWeapon}, you kill it with ${playerWeapon}`,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        computerScore: prev.computerScore + 1,
        gamesPlayed: prev.gamesPlayed + 1,
        message: `LOSE: You died with ${playerWeapon}, computer kill you with ${computerWeapon}`,
      }));
    }
  };

  const resetGame = () => {
    setGameState({
      gamesPlayed: 0,
      ties: 0,
      playerScore: 0,
      computerScore: 0,
      message: '',
    });
  };

  return (
    <div>
      <h1>Rock, Paper, Scissors</h1>
      <button onClick={() => playOneRound('ROCK')}>Rock</button>
      <button onClick={() => playOneRound('PAPER')}>Paper</button>
      <button onClick={() => playOneRound('SCISSORS')}>Scissors</button>

      <div>{gameState.message}</div>
      <div>
        Game played: {gameState.gamesPlayed}
        <br />
        Ties: {gameState.ties}
        <br />
        You: {gameState.playerScore}
        <br />
        Computer: {gameState.computerScore}
      </div>

      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default RockPaperScissors;
