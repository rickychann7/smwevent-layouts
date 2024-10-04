import { css } from '@emotion/react';
import { globalStyle } from '../../styles/global';
import { useReplicant } from '@nodecg/react-hooks';
import { Player, Timer } from '../../../../types/schemas';
import { ViewSettings } from '../../../../types/viewsettings';
import { PlayerCompleteTimes } from './playerCompleteTime';

export const Nameplate = (props: {
  index: number;
  view: ViewSettings;
  position: { x: number; y: number };
  customHeight?: number;
  mainView?: { width: number; height: number; y: number; x: number };
  customFontSize?: number;
}) => {
  const [player] = useReplicant<Player>('player');
  const [timer] = useReplicant<Timer>('timer');

  const nameplateContainer = css`
    font-size: ${props.customFontSize ?? 2.2}em;
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
    width: ${props.mainView?.width ?? props.view.width}px;
    height: ${props.mainView?.height ?? props.customHeight ?? '70'}px;
    top: ${props.mainView?.y ?? props.position.y}px;
    left: ${props.mainView?.x ?? props.position.x}px;
  `;

  if (!player || !timer) return;

  return (
    <div css={[globalStyle, nameplateContainer]}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 5,
          paddingLeft: 20,
          paddingRight: 10,
          paddingBottom: 5,
        }}>
        <div>{player[props.index]}</div>
        <div style={{ color: '#ffd036' }}>
          <PlayerCompleteTimes index={props.index} />
        </div>
      </div>
    </div>
  );
};
