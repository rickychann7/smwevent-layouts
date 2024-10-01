import { useReplicant } from '@nodecg/react-hooks';
import React, { useEffect, useState } from 'react';
import { Timer } from '../../../types/schemas';
import { formatTime } from '../../lib/timeformat';
import '@fontsource-variable/rubik';

export const MainTimer: React.FC = () => {
  const [timer] = useReplicant<Timer>('timer');
  const [timerColor, setColor] = useState<string>('white');

  useEffect(() => {
    if (timer?.state == 'Finished') {
      setColor('#e6b100');
    } else if (timer?.state == 'Running') {
      setColor('white');
    } else {
      setColor('white');
    }
  });

  if (!timer) {
    return;
  } else {
    return (
      <div style={{}}>
        <p
          style={{
            fontFamily: 'Rubik Variable',
            fontWeight: 600,
            fontSize: '108px',
            color: timerColor,
            WebkitTextStroke: '0px black',
          }}>
          {formatTime(timer.raw)}
        </p>
      </div>
    );
  }
};
