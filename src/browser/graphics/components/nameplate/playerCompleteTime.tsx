import { useReplicant } from '@nodecg/react-hooks';
import { useEffect, useState } from 'react';
import { Timer } from '../../../../types/schemas';
import { formatTime } from '../../../lib/formattime';

export const PlayerCompleteTimes = (props: { index: number }) => {
  const [timer] = useReplicant<Timer>('timer');
  const [formattedCompleteTime, setFormattedCompleteTime] = useState('');
  useEffect(() => {
    if (!timer) return;
    if (timer?.results[props.index] === 0) {
      setFormattedCompleteTime('');
    } else {
      setFormattedCompleteTime(formatTime(timer.results[props.index]));
    }
  });
  return <div>{formattedCompleteTime}</div>;
};
