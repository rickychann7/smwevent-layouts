/** @jsxImportSource @emotion/react */
import { render } from '../../../render';
import { ViewCanvas } from '../../components/view-canvas';
import { Footer } from '../../components/footer/index';
import { MainTimer } from '../../components/timer';
import { Nameplate } from '../../components/nameplate';
import { ViewSettings } from '../../../../types/viewsettings';
import { Logo } from '../../components/logo';

const viewSettings: ViewSettings = {
  player: 2,
  width: 922,
  height: 519,
  initPos: { x: 25, y: 25 },
  margin: { x: 25, y: 110 },
};

const App: React.FC = () => {
  return (
    <div id="container">
      <div style={{ position: 'relative', width: '1920px', height: '1080px', overflow: 'hidden' }}>
        <ViewCanvas
          slotNumber={viewSettings.player}
          slotSize={{ width: viewSettings.width, height: viewSettings.height }}
          firstSlotPosition={{ x: viewSettings.initPos.x, y: viewSettings.initPos.y }}
          margin={{ x: viewSettings.margin.x, y: viewSettings.margin.y }}
        />
        <Logo style={{ position: 'absolute', transform: 'scale(0.7)', top: 800, left: 1170, opacity: 0.87 }}></Logo>
        <Nameplate
          index={0}
          view={viewSettings}
          position={{ x: viewSettings.initPos.x, y: viewSettings.initPos.y + viewSettings.height }}></Nameplate>
        <Nameplate
          index={1}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x + viewSettings.width + viewSettings.margin.x,
            y: viewSettings.initPos.y + viewSettings.height,
          }}></Nameplate>
        <div style={{ position: 'absolute', top: 500, left: 1400 }}>
          <MainTimer />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

render(
  <>
    <App />
  </>,
);
