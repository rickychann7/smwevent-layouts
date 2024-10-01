/** @jsxImportSource @emotion/react */
import { Button, createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import { render } from '../../render';
import { useReplicant } from '@nodecg/react-hooks';
import { Timer } from '../../../types/schemas';
import { formatTime } from '../../lib/timeformat';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  const [timer] = useReplicant<Timer>('timer');
  if (!timer) return;
  const formattedTime = formatTime(timer?.raw);
  return (
    <ThemeProvider theme={theme}>
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'fit-content',
          backgroundColor: '#202020',
          color: '#FFFFFF',
          padding: '20px',
          borderRadius: '10px',
        }}>
        <div css={{ display: 'flex', fontSize: '48px', fontFamily: 'monospace', fontWeight: 'bold' }}>
          {formattedTime}
        </div>
      </div>

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
    </ThemeProvider>
  );
};

render(
  <>
    <App />
  </>,
);
