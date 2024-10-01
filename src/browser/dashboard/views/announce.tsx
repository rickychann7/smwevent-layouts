import { Box, Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import { Announce } from '../../../types/schemas';
import { useState } from 'react';
import { useReplicant } from '@nodecg/react-hooks';
import { render } from '../../render';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App: React.FC = () => {
  const [announce, setAnnounce] = useReplicant<Announce>('announce');
  const [inputText, setInputText] = useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <div id="container">
        <TextField
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
          label="Text"
          variant="outlined"
          style={{ width: 250, marginTop: 15, marginBottom: 15, marginLeft: 5 }}
          sx={{ input: { color: 'white' } }}></TextField>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={() => {
              setAnnounce(inputText);
              nodecg.sendMessage('updateAnnounce');
            }}
            variant="contained">
            追加
          </Button>
        </Box>
        <h3>表示中</h3>
        {announce}
      </div>
    </ThemeProvider>
  );
};

render(
  <>
    <App />
  </>,
);
