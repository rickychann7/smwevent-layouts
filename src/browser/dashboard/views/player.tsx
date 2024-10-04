import { createTheme, ThemeProvider } from '@mui/material';
import { render } from '../../render';
import { PlayerSelect } from '../player';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <PlayerSelect></PlayerSelect>
    </ThemeProvider>
  );
};

render(
  <>
    <App />
  </>,
);
