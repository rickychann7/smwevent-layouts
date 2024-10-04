import { useReplicant } from '@nodecg/react-hooks';
import { Comment } from '../../../types/schemas';
import { render } from '../../render';
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [comment, setComment] = useReplicant<Comment>('comment');
  const [textInput, setTextInput] = useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <div>表示中: {comment}</div>
      <TextField
        onChange={(event) => {
          setTextInput(event.target.value);
        }}></TextField>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setComment(textInput);
        }}>
        更新
      </Button>
    </ThemeProvider>
  );
};

render(
  <>
    <App />
  </>,
);
