import { render } from '../../../render';
import { ViewCanvas } from '../../components/view-canvas';
import { Footer } from '../../components/footer/index';
import { Nameplate } from '../../components/nameplate';
import { ViewSettings } from '../../../../types/viewsettings';
import { MainTimer } from '../../components/timer';
import { Logo } from '../../components/logo';

const viewSettings: ViewSettings = {
  player: 4,
  width: 715,
  height: 402,
  initPos: { x: 440, y: 25 },
  margin: { x: 25, y: 100 },
};

const App: React.FC = () => {
  return (
    <div>
      <div style={{ position: 'relative', width: '1920px', height: '1080px', overflow: 'hidden' }}>
        <ViewCanvas
          slotNumber={viewSettings.player}
          slotSize={{ width: viewSettings.width, height: viewSettings.height }}
          firstSlotPosition={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y,
          }}
          margin={{ x: viewSettings.margin.x, y: viewSettings.margin.y }}
        />
        <Logo style={{ position: 'absolute', transform: 'scale(0.5)', top: 800, left: -200, opacity: 0.87 }}></Logo>
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
        <Nameplate
          index={2}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}></Nameplate>
        <Nameplate
          index={3}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x + viewSettings.width + viewSettings.margin.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}></Nameplate>
        <div style={{ position: 'absolute', top: 200, left: 300 }}>
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
