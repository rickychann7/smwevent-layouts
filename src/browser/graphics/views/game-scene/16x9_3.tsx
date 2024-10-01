import { render } from '../../../render';
import { ViewCanvas } from '../../components/view-canvas';
import { Footer } from '../../components/footer/index';
import { Nameplate } from '../../components/nameplate';
import { ViewSettings } from '../../../../types/viewsettings';
import { MainTimer } from '../../components/timer';

const viewSettings: ViewSettings = {
  player: 3,
  width: 715,
  height: 402,
  initPos: { x: 205, y: 20 },
  margin: { x: 85, y: 110 },
};

const customPos = { x: viewSettings.width + viewSettings.initPos.x + viewSettings.margin.x, y: 0 };

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
          customPos={{ x: customPos.x, y: customPos.y }}
        />
        <Nameplate
          index={0}
          view={viewSettings}
          position={{ x: customPos.x, y: viewSettings.initPos.y + viewSettings.height }}></Nameplate>
        <Nameplate
          index={1}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + (viewSettings.height * 2 + viewSettings.margin.y),
          }}></Nameplate>
        <Nameplate
          index={2}
          view={viewSettings}
          position={{
            x: customPos.x,
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
