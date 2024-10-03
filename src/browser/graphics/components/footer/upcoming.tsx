import { css } from '@emotion/react';
import { useReplicant } from '@nodecg/react-hooks';
import React from 'react';
import { Event } from '../../../../types/schemas';

const nextStyle = css`
  display: flex;
`;

export const Upcoming: React.FC = () => {
  const [event] = useReplicant<Event>('event');
  if (!event) return;
  const upcoming = event[1];

  return (
    <div>
      <div css={[nextStyle]}>
        <p>Next up ▶▶　</p>
        <p>{upcoming}</p>
      </div>
    </div>
  );
};
