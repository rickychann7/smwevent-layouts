import { Box, Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import { render } from '../../render';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

interface EventListProps {
  index: number;
  event: string[];
}

const EventList: React.FC<EventListProps> = ({ index, event }) => {
  return <div>{event[index]}</div>;
};

const App = () => {
  const [text, setText] = useState('');
  const [eventArray, setEventArray] = useState<string[]>(['']);

  const eventList = [];

  for (let i = 0; i < eventArray.length; i++) {
    eventList.push(<EventList key={i} index={i} event={eventArray}></EventList>);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          label="追加したいイベント名"
          variant="outlined"
          style={{ width: 250, marginTop: 15, marginBottom: 15, marginLeft: 5 }}
          sx={{ input: { color: 'white' } }}></TextField>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            onClick={() => {
              setEventArray((prevItems) => [...prevItems, text]);
              nodecg.sendMessage('updateUpcomingEvent');
            }}
            variant="contained">
            更新
          </Button>
          <Button
            onClick={() => {
              setEventArray(['']);
            }}
            variant="contained">
            削除
          </Button>
          次のイベント:
          <div>{eventList}</div>
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
