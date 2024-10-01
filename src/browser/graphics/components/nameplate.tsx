/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { globalStyle } from '../styles/global';
import { useReplicant } from '@nodecg/react-hooks';
import { Player } from '../../../types/schemas';
import { ViewSettings } from '../../../types/viewsettings';

interface Nameplate {
  index: number;
  view: ViewSettings;
  position: { x: number; y: number };
}

export const Nameplate: React.FC<Nameplate> = ({ view, index, position }) => {
  const [player] = useReplicant<Player>('player');

  const nameplateContainer = css`
    font-size: 35px;
    font-weight: 800;

    background-color: #00000058;
    color: #ffffff;

    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border: 4px solid #fff;
    border-top: none;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    position: absolute;
    width: ${view.width}px;
    height: 70px;
    top: ${position.y}px;
    left: ${position.x}px;
  `;

  const nameplateStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom: 5px;
  `;

  if (player != undefined) {
    return (
      <div css={[globalStyle, nameplateContainer]}>
        <div css={[nameplateStyle]}>
          <span>{player[index]}</span>
        </div>
      </div>
    );
  } else {
    return;
  }
};
