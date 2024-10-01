/** @jsxImportSource @emotion/react */
import { render } from '../../../render';
import { ViewCanvas } from '../../components/view-canvas';
import { Footer } from '../../components/footer/index';
import { MainTimer } from '../../components/timer';
import { Nameplate } from '../../components/nameplate';
import { ViewSettings } from '../../../../types/viewsettings';
import { Logo } from '../../components/logo';
import { Box } from '../../components/box';
import '@fontsource-variable/m-plus-1';

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
        <Box
          style={{
            padding: 20,
            fontFamily: 'M PLUS 1 Variable',
            fontWeight: 900,
            color: 'white',
            fontSize: 48,
            width: 1080,
            height: 300,
            position: 'absolute',
            top: 650,
            left: 100,
            backgroundColor: '#00000058',
            border: '4px solid #fff',
            borderRadius: 15,
          }}></Box>
        <Logo style={{ position: 'absolute', transform: 'scale(0.5)', top: 850, left: 1275 }}></Logo>
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
        <MainTimer
          style={{ position: 'absolute', top: 820, left: 1330, width: 415, padding: 20, borderTop: 'solid' }}
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
