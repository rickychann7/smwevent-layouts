/** @jsxImportSource @emotion/react */
import React from 'react';
import { Player } from '../../../types/schemas';
import { useReplicant } from '@nodecg/react-hooks';
import { css } from '@emotion/react';
import { globalStyle } from '../styles/global';
import { widgetStyle } from '../styles/global';

const nameplate = css`
  display: flex;
  align-items: center;
  width: 500px;
  height: 50px;
  margin-left: 10px;
  font-weight: bold;
`;

interface Racer {
  index: number;
}

export const Nameplate: React.FC<Racer> = ({ index }) => {
  const [player] = useReplicant<Player>('player');

  return (
    <div css={globalStyle}>
      <div css={[widgetStyle, nameplate]}>
        <p>{player?.name[index]}</p>
        <p>finishTime</p>
      </div>
    </div>
  );
};
