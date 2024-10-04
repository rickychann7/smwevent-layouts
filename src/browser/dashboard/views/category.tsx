import { useReplicant } from '@nodecg/react-hooks';
import { Category } from '../../../types/schemas';
import { render } from '../../render';
import { Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [category, setCategory] = useReplicant<Category>('category');
  const [textInput, setTextInput] = useState<string>('');

  return (
    <ThemeProvider theme={theme}>
      <div>表示中: {category}</div>
      <TextField
        onChange={(event) => {
          setTextInput(event.target.value);
        }}></TextField>
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          setCategory(textInput);
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
