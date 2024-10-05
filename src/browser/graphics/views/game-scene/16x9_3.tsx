import { render } from '../../../render';
import { ViewCanvas } from '../../components/viewCanvas';
import { Footer } from '../../components/footer/index';
import { Nameplate } from '../../components/nameplate/nameplate';
import { ViewSettings } from '../../../../types/viewsettings';
import { MainTimer } from '../../components/timer';
import { Logo } from '../../components/logo';
import { Box } from '../../components/box';
import { CategoryName } from '../../components/categoryName';

const viewSettings: ViewSettings = {
  player: 3,
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
        <Box
          style={{
            padding: 20,
            fontFamily: 'M PLUS 1 Variable',
            fontWeight: 900,
            color: 'white',
            fontSize: 48,
            width: 340,
            height: 480,
            position: 'absolute',
            top: 200,
            left: 25,
            backgroundColor: '#00000058',
            border: '4px solid #fff',
            borderRadius: 15,
          }}></Box>
        <Logo style={{ position: 'absolute', transform: 'scale(0.48)', top: 0, left: -200 }}></Logo>
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
        <CategoryName
          style={{
            top: 750,
            left: 25,
            width: 345,
            fontSize: 56,
            borderBottom: 'solid',
            padding: 20,
            color: 'white',
          }}
        />
        <MainTimer
          style={{
            position: 'absolute',
            top: 875,
            left: 40,
            width: 325,
            padding: 20,
            fontSize: 84,
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
