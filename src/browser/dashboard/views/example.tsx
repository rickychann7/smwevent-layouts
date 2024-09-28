import { render } from '../../render';
import { Box, Button, TextField } from '@mui/material';
import { useReplicant } from '@nodecg/react-hooks';
import { ExampleReplicant } from '../../../types/schemas';
import { useState } from 'react';

const exampleRep = nodecg.Replicant<ExampleReplicant>('exampleReplicant');

const App = () => {
  const [example] = useReplicant<ExampleReplicant>('exampleReplicant');
  const [text, setText] = useState('');

  const updateText = () => {
    if (typeof exampleRep.value != 'undefined') {
      exampleRep.value.text = text;
    }
  };

  return (
    <div id="container">
      <div>This is Panel.</div>
      <p>Age: {example?.age}</p>
      <TextField
        value={text}
        onChange={(event) => setText(event.target.value)}
        label="Text"
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'lightblue',
            },
          },
        }}></TextField>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button onClick={() => updateText()} variant="contained">
          Update
        </Button>
        <Button onClick={() => nodecg.sendMessage('resetAge')} variant="contained">
          Rebirth
        </Button>
      </Box>
    </div>
  );
};

render(<App />);
