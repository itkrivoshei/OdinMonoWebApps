import React, { useState } from 'react';
import {
  Container,
  Button,
  Typography,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';
import MoodBadIcon from '@mui/icons-material/MoodBad';

type Weapon = 'ROCK' | 'PAPER' | 'SCISSORS';

interface GameState {
  gamesPlayed: number;
  ties: number;
  playerScore: number;
  computerScore: number;
  message: string;
}

export const RockPaperScissors: React.FC = () => {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#50fa7b', // green
      },
      secondary: {
        main: '#ff79c6', // pink
      },
      background: {
        default: '#282a36',
        paper: '#44475a',
      },
      text: {
        primary: '#f8f8f2',
        secondary: '#6272a4',
      },
    },
  });

  const [gameState, setGameState] = useState<GameState>({
    gamesPlayed: 0,
    ties: 0,
    playerScore: 0,
    computerScore: 0,
    message: '',
  });

  const getComputerChoice = (): Weapon => {
    const weaponNum = Math.floor(Math.random() * 3 + 1);

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
        message: `WIN: Machine died with ${computerWeapon}, you killed it with ${playerWeapon}`,
      }));
    } else {
      setGameState((prev) => ({
        ...prev,
        computerScore: prev.computerScore + 1,
        gamesPlayed: prev.gamesPlayed + 1,
        message: `LOSE: You died with ${playerWeapon}, computer killed you with ${computerWeapon}`,
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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
            maxWidth: '400px',
            marginBottom: '2rem',
          }}
        >
          <Button
            variant='contained'
            color='primary'
            onClick={() => playOneRound('ROCK')}
          >
            Rock
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => playOneRound('PAPER')}
          >
            Paper
          </Button>
          <Button
            variant='contained'
            color='primary'
            onClick={() => playOneRound('SCISSORS')}
          >
            Scissors
          </Button>
        </div>

        <Typography
          variant='h6'
          style={{
            marginTop: '2rem',
            color: gameState.message.includes('WIN')
              ? '#50fa7b'
              : gameState.message.includes('TIE')
              ? '#f1fa8c'
              : '#ff5555',
          }}
        >
          {gameState.message}
        </Typography>

        {gameState.message.includes('WIN') && (
          <EmojiEventsIcon style={{ marginTop: '0.5rem', color: '#50fa7b' }} />
        )}
        {gameState.message.includes('TIE') && (
          <PeopleIcon style={{ marginTop: '0.5rem', color: '#f1fa8c' }} />
        )}
        {gameState.message.includes('LOSE') && (
          <MoodBadIcon style={{ marginTop: '0.5rem', color: '#ff5555' }} />
        )}

        <Typography style={{ marginTop: '1.5rem' }}>
          Game played: {gameState.gamesPlayed} <br />
          Ties: {gameState.ties} <br />
          You: {gameState.playerScore} <br />
          Computer: {gameState.computerScore}
        </Typography>

        <Button
          variant='contained'
          color='secondary'
          onClick={resetGame}
          style={{ marginTop: '2rem' }}
        >
          Play Again
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default RockPaperScissors;
