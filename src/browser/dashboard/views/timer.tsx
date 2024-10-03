import React from 'react';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import { Check, Undo } from '@mui/icons-material';
import { render } from '../../render';
import { useReplicant } from '@nodecg/react-hooks';
import { Player, Timer } from '../../../types/schemas';
import { formatTime } from '../../lib/formattime';

const theme = createTheme({
  palette: {
    mode: 'dark',
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
            style={{ marginRight: 11 }}
            onClick={() => nodecg.sendMessage('startTimer')}>
            ▶
          </Button>
          <Button
            variant="contained"
            color="error"
            size="large"
            style={{ marginRight: 11 }}
            onClick={() => nodecg.sendMessage('stopTimer')}>
            ■
          </Button>
          <Button
            variant="contained"
            size="large"
            style={{ marginRight: 11 }}
            onClick={() => nodecg.sendMessage('resetTimer')}>
            Reset
          </Button>
          <Button
            variant="contained"
            size="large"
            color="info"
            style={{ marginRight: 11 }}
            onClick={() => nodecg.sendMessage('currentTimerState')}>
            Log
          </Button>
        </div>
      </div>
      <div>
        <h2>プレイ中の走者</h2>
        <ul>
          {player?.map(
            (value, index) =>
              value && (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <div style={{ fontSize: '1.3rem' }}>
                    プレイヤー {index + 1}: {value}
                    <div>タイム: {formatTime(timer.results[index])}</div>
                    <div style={{ margin: 10, padding: 10 }}>
                      <Button
                        variant="contained"
                        color="success"
                        size="large"
                        startIcon={<Check />}
                        onClick={() => {
                          nodecg.sendMessage('playerTimeConfirm', index);
                          console.log(timer.completeCount + '/' + (player.length - 1));
                        }}></Button>
                      <Button
                        variant="contained"
                        color="error"
                        size="large"
                        startIcon={<Undo />}
                        onClick={() => {
                          nodecg.sendMessage('playerTimeUndo', index);
                          console.log(timer.completeCount + '/' + (player.length - 1));
                        }}></Button>
                    </div>
                  </div>
                </li>
              ),
          )}
        </ul>
      </div>
    </ThemeProvider>
  );
};

render(
  <>
    <App />
  </>,
);
