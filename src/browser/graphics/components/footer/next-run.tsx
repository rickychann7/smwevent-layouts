/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useReplicant } from '@nodecg/react-hooks';
import React from 'react';

const nextStyle = css`
  display: flex;
`;

export const NextRun: React.FC = () => {
  const [nextRun] = useReplicant('nextrun');

  return (
    <div>
      <div css={[nextStyle]}>
        <p>Next up ▶▶　</p>
        <p>{nextRun}</p>
      </div>
    </div>
  );
};
