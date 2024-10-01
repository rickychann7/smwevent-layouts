import { useReplicant } from '@nodecg/react-hooks';
import React from 'react';
import { Timer } from '../../../types/schemas';

export const MainTimer: React.FC = () => {
  const [timer] = useReplicant<Timer>('timer');
  return (
    <div>
      <p>{timer?.raw}</p>
    </div>
  );
};
