import { render } from '../../../../../render';
import { ViewCanvas } from '../../../../components/viewCanvas';
import { Footer } from '../../../../components/footer/index';
import { Nameplate } from '../../../../components/nameplate/nameplate';
import { ViewSettings } from '../../../../../../types/viewsettings';
import { MainTimer } from '../../../../components/timer';
import { Logo } from '../../../../components/logo';
import { Box } from '../../../../components/box';
import bgBlack from '../../../../images/bg_black.png';

const viewSettings: ViewSettings = {
  player: 7,
  width: 440,
  height: 244,
  initPos: { x: 20, y: 35 },
  margin: { x: 10, y: 70 },
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
          customBgImg={bgBlack}
        />
        <Logo style={{ position: 'absolute', transform: 'scale(0.5)', top: 795, left: 780, opacity: 0.6 }}></Logo>
        <Box
          style={{
            padding: 20,
            fontFamily: 'M PLUS 1 Variable',
            fontWeight: 900,
            color: 'white',
            fontSize: 48,
            width: 450,
            height: 251,
            position: 'absolute',
            top: 695,
            left: 955,
            backgroundColor: '#00000058',
            border: '4px solid #fff',
            borderRadius: 15,
          }}></Box>
        <Nameplate
          index={2}
          view={viewSettings}
          position={{ x: viewSettings.initPos.x, y: viewSettings.initPos.y + viewSettings.height }}
          mainView={{ width: 973, height: 80, x: 925, y: 578 }}
          customFontSize={2.5}></Nameplate>
        <Nameplate
          index={0}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height,
          }}
          customHeight={55}
          customFontSize={1.6}></Nameplate>
        <Nameplate
          index={1}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x + viewSettings.width + viewSettings.margin.x,
            y: viewSettings.initPos.y + viewSettings.height,
          }}
          customHeight={55}
          customFontSize={1.6}></Nameplate>
        <Nameplate
          index={3}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}
          customHeight={55}
          customFontSize={1.6}></Nameplate>
        <Nameplate
          index={4}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x + viewSettings.width + viewSettings.margin.x,
            y: viewSettings.initPos.y + viewSettings.height * 2 + viewSettings.margin.y,
          }}
          customHeight={55}
          customFontSize={1.6}></Nameplate>
        <Nameplate
          index={5}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height * 3 + viewSettings.margin.y * 2,
          }}
          customHeight={55}
          customFontSize={1.6}></Nameplate>
        <Nameplate
          index={6}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x + viewSettings.width + viewSettings.margin.x,
            y: viewSettings.initPos.y + viewSettings.height * 3 + viewSettings.margin.y * 2,
          }}
          customHeight={55}
          customFontSize={1.6}></Nameplate>
        <MainTimer
          style={{
            position: 'absolute',
            top: 875,
            left: 1500,
            width: 330,
            padding: 20,
            borderTop: 'solid',
            fontSize: '84px',
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
