/** @jsxImportSource @emotion/react */
import { useReplicant } from '@nodecg/react-hooks';
import React from 'react';
import { Timer } from '../../../types/schemas';
import { render } from '../../render';
import { formatTime } from '../../lib/timeformat';

const App: React.FC = () => {
  const [timer] = useReplicant<Timer>('timer');
  if (!timer) return;
  const formattedTime = formatTime(timer?.raw);
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        backgroundColor: '#202020',
        color: '#FFFFFF',
        padding: '20px',
        borderRadius: '10px',
      }}>
      <div css={{ display: 'flex', fontSize: '96px', fontFamily: 'monospace', fontWeight: 'bold' }}>
        {formattedTime}
      </div>
    </div>
  );
};

render(
  <>
    <App />
  </>,
);
