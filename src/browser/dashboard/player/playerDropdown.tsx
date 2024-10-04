import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface PlayerControlProps {
  playerIndex: number;
  options: string[];
  selected: (value: string) => void;
}

export const PlayerControl: React.FC<PlayerControlProps> = ({ playerIndex, options, selected }) => {
  const [selectedName, setSelectedName] = useState<string>('');

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    setSelectedName(value);
    selected(value);
  };

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id={`dropdown-${playerIndex}`}>プレイヤー {playerIndex}: </InputLabel>
      <Select
        labelId={`dropdown-${playerIndex}`}
        value={selectedName}
        onChange={handleSelectChange}
        label={`プレイヤー ${playerIndex}: `}
        style={{ margin: 5 }}>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
