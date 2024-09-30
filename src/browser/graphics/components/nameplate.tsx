/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import { globalStyle } from '../styles/global';
import { useReplicant } from '@nodecg/react-hooks';
import { Player } from '../../../types/schemas';

export type ViewSettings = {
  playerIndex: number;
  width: number;
  height: number;
  initPos: {
    x: number;
    y: number;
  };
  margin: {
    x: number;
    y: number;
  };
};

interface Nameplate {
  index: number;
  style: ViewSettings;
}

export const Nameplate: React.FC<Nameplate> = ({ style, index }) => {
  const [player] = useReplicant<Player>('player');

  const nameplateContainer = css`
    font-size: 39px;
    font-weight: 800;

    background-color: #00000041;
    color: #ffffff;
    text-shadow: rgb(0, 0, 0) 3px 0px 0px, rgb(0, 0, 0) 2.83487px 0.981584px 0px, rgb(0, 0, 0) 2.35766px 1.85511px 0px,
      rgb(0, 0, 0) 1.62091px 2.52441px 0px, rgb(0, 0, 0) 0.705713px 2.91581px 0px,
      rgb(0, 0, 0) -0.287171px 2.98622px 0px, rgb(0, 0, 0) -1.24844px 2.72789px 0px,
      rgb(0, 0, 0) -2.07227px 2.16926px 0px, rgb(0, 0, 0) -2.66798px 1.37182px 0px,
      rgb(0, 0, 0) -2.96998px 0.42336px 0px, rgb(0, 0, 0) -2.94502px -0.571704px 0px,
      rgb(0, 0, 0) -2.59586px -1.50383px 0px, rgb(0, 0, 0) -1.96093px -2.27041px 0px,
      rgb(0, 0, 0) -1.11013px -2.78704px 0px, rgb(0, 0, 0) -0.137119px -2.99686px 0px,
      rgb(0, 0, 0) 0.850987px -2.87677px 0px, rgb(0, 0, 0) 1.74541px -2.43999px 0px,
      rgb(0, 0, 0) 2.44769px -1.73459px 0px, rgb(0, 0, 0) 2.88051px -0.838246px 0px;

    outline: 4px solid #ffffff;
    outline-offset: -4px;
    border-radius: 15px;

    position: absolute;
    width: ${style.width}px;
    height: 80px;
    top: ${style.initPos.y + style.height + 1}px;
    left: ${style.margin.x + style.width * index + style.margin.x * index /* + 8 */}px;
  `;

  const nameplateStyle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 5px;
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom: 5px;
    line-height: 60px;
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
