import { Box, Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { useReplicant } from '@nodecg/react-hooks';
import { render } from '../../render';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [nextRun, setNextRun] = useReplicant<string>('nextrun');
  const [text, setText] = useState('');

  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          label="１つ次のイベント"
          variant="outlined"
          style={{ width: 250, marginTop: 15, marginBottom: 15, marginLeft: 5 }}
          sx={{ input: { color: 'white' } }}></TextField>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={() => {
              setNextRun(text);
              nodecg.sendMessage('updateNextRun');
            }}
            variant="contained">
            更新
          </Button>
        </Box>
      </ThemeProvider>
    </>
  );
};

render(
  <>
    <App />
  </>,
);
