import { useReplicant } from '@nodecg/react-hooks';
import { CSSProperties, useEffect, useState } from 'react';
import { Timer } from '../../../types/schemas';
import { formatTime } from '../../lib/timeformat';
import '@fontsource-variable/rubik';

export const MainTimer = (props: { style: CSSProperties }) => {
  const [timer] = useReplicant<Timer>('timer');
  const [timerColor, setColor] = useState<string>('white');

  useEffect(() => {
    if (timer?.state == 'Finished') {
      setColor('#ffd036');
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
      <div
        style={{
          ...props.style,
          color: timerColor,
          fontFamily: 'Rubik Variable',
          fontWeight: 600,
          fontSize: '108px',
          borderTopColor: 'white',
          textAlign: 'left',
        }}>
        <div>{formatTime(timer.raw)}</div>
      </div>
    );
  }
};
