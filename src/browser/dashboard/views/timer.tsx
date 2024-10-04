import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Check, Undo, PlayArrow, Pause, RestartAlt, Terminal } from '@mui/icons-material';
import { render } from '../../render';
import { useReplicant } from '@nodecg/react-hooks';
import { Player, Timer } from '../../../types/schemas';
import { formatTime } from '../../lib/formattime';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { minWidth: 70, minHeight: 30, margin: 5 },
        iconSizeMedium: {
          '& > *:first-child': { fontSize: 30 },
        },
        iconSizeLarge: {
          '& > *:first-child': { fontSize: 36 },
        },
        startIcon: {
          margin: 0,
        },
      },
    },
  },
});

const App: React.FC = () => {
  const [timer] = useReplicant<Timer>('timer');
  const [player] = useReplicant<Player>('player');

  if (!timer) return;
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          justifyContent: 'center',
          color: '#FFFFFF',
          borderRadius: '5px',
          margin: '10px',
        }}>
        <div
          style={{
            position: 'relative',
            textAlign: 'center',
            fontSize: '72px',
            fontFamily: 'monospace',
            fontWeight: 'bold',
          }}>
          {formatTime(timer?.raw)}
        </div>
        <div style={{ position: 'relative', textAlign: 'center', marginTop: 10 }}>
          <Button
            variant="contained"
            color="success"
            size="large"
            startIcon={<PlayArrow />}
            onClick={() => nodecg.sendMessage('startTimer')}
          />
          <Button
            variant="contained"
            color="error"
            size="large"
            startIcon={<Pause />}
            onClick={() => nodecg.sendMessage('stopTimer')}></Button>
          <Button
            variant="contained"
            size="large"
            startIcon={<RestartAlt />}
            onClick={() => nodecg.sendMessage('resetTimer')}></Button>
          <Button
            variant="contained"
            size="large"
            color="info"
            startIcon={<Terminal />}
            style={{ fontSize: 20 }}
            onClick={() => nodecg.sendMessage('currentTimerState')}></Button>
        </div>
      </div>
      <div>
        <div style={{ fontSize: 32, fontWeight: 800 }}>プレイ中の走者</div>
        <div>
          {player?.map(
            (value, index) =>
              value && (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}>
                  <div style={{ fontSize: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {value}
                      <div style={{ position: 'relative', margin: 10 }}>
                        <Button
                          variant="contained"
                          color="success"
                          size="medium"
                          startIcon={<Check />}
                          onClick={() => {
                            nodecg.sendMessage('playerTimeConfirm', index);
                            console.log(timer.completeCount + '/' + player.length);
                          }}></Button>
                        <Button
                          variant="contained"
                          color="primary"
                          size="medium"
                          startIcon={<Undo />}
                          onClick={() => {
                            nodecg.sendMessage('playerTimeUndo', index);
                            console.log(timer.completeCount + '/' + player.length);
                          }}></Button>
                      </div>
                    </div>
                    タイム: {formatTime(timer.results[index])}{' '}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

render(
  <>
    <App />
  </>,
);
