import { render } from '../../../../render';
import { ViewCanvas } from '../../../components/view-canvas';
import { Footer } from '../../../components/footer/index';
import { Nameplate } from '../../../components/nameplate';
import { ViewSettings } from '../../../../../types/viewsettings';
import { MainTimer } from '../../../components/timer';
import { Logo } from '../../../components/logo';
import { Box } from '../../../components/box';

const viewSettings: ViewSettings = {
  player: 5,
  width: 430,
  height: 234,
  initPos: { x: 1010, y: 35 },
  margin: { x: 25, y: 75 },
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
          focus={true}
        />
        <Logo style={{ position: 'absolute', transform: 'scale(0.5)', top: 850, left: 1275 }}></Logo>
        <Box
          style={{
            padding: 20,
            fontFamily: 'M PLUS 1 Variable',
            fontWeight: 900,
            color: 'white',
            fontSize: 48,
            width: 1080,
            height: 275,
            position: 'absolute',
            top: 680,
            left: 100,
            backgroundColor: '#00000058',
            border: '4px solid #fff',
            borderRadius: 15,
          }}></Box>
        <Nameplate
          index={1}
          view={viewSettings}
          position={{ x: viewSettings.initPos.x, y: viewSettings.initPos.y + viewSettings.height }}
          mainView={{ width: 973, height: 70, x: 15, y: 578 }}></Nameplate>
        <Nameplate
          index={0}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height,
          }}
          customHeight={60}
          customFontSize={1.7}></Nameplate>
        <Nameplate
          index={2}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x + viewSettings.width + viewSettings.margin.x,
            y: viewSettings.initPos.y + viewSettings.height,
          }}
          customHeight={60}
          customFontSize={1.7}></Nameplate>
        <Nameplate
          index={3}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}
          customHeight={60}
          customFontSize={1.7}></Nameplate>
        <Nameplate
          index={4}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x + viewSettings.width + viewSettings.margin.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}
          customHeight={60}
          customFontSize={1.7}></Nameplate>
        <MainTimer
          style={{
            position: 'absolute',
            top: 820,
            left: 1330,
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
