import { render } from '../../../render';
import { ViewCanvas } from '../../components/viewCanvas';
import { Footer } from '../../components/footer/index';
import { Nameplate } from '../../components/nameplate';
import { ViewSettings } from '../../../../types/viewsettings';
import { MainTimer } from '../../components/timer';
import { Logo } from '../../components/logo';
import { Box } from '../../components/box';

const viewSettings: ViewSettings = {
  player: 3,
  width: 715,
  height: 402,
  initPos: { x: 440, y: 25 },
  margin: { x: 25, y: 100 },
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
        <Box
          style={{
            padding: 20,
            fontFamily: 'M PLUS 1 Variable',
            fontWeight: 900,
            color: 'white',
            fontSize: 48,
            width: 340,
            height: 701,
            position: 'absolute',
            top: 250,
            left: 25,
            backgroundColor: '#00000058',
            border: '4px solid #fff',
            borderRadius: 15,
          }}></Box>
        <Logo style={{ position: 'absolute', transform: 'scale(0.48)', top: 25, left: -200 }}></Logo>
        <Nameplate
          index={0}
          view={viewSettings}
          position={{ x: customPos.x, y: viewSettings.initPos.y + viewSettings.height }}></Nameplate>
        <Nameplate
          index={1}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}></Nameplate>
        <Nameplate
          index={2}
          view={viewSettings}
          position={{
            x: customPos.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}></Nameplate>
        <MainTimer
          style={{
            position: 'absolute',
            top: 350,
            left: 580,
            width: 415,
            padding: 20,
            borderTop: 'solid',
            fontSize: '108px',
          }}
        />
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
