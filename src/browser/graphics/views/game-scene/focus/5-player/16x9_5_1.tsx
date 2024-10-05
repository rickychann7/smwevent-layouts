import { render } from '../../../../../render';
import { ViewCanvas } from '../../../../components/viewCanvas';
import { Footer } from '../../../../components/footer/index';
import { Nameplate } from '../../../../components/nameplate/nameplate';
import { ViewSettings } from '../../../../../../types/viewsettings';
import { MainTimer } from '../../../../components/timer';
import { Logo } from '../../../../components/logo';
import { Box } from '../../../../components/box';
import { CategoryName } from '../../../../components/categoryName';

const viewSettings: ViewSettings = {
  player: 5,
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
        />
        <Logo
          style={{
            position: 'absolute',
            transform: 'scale(0.7)',
            top: 780,
            left: 160,
            opacity: 0.6,
          }}></Logo>
        <Box
          style={{
            padding: 20,
            fontFamily: 'M PLUS 1 Variable',
            fontWeight: 900,
            color: 'white',
            fontSize: 48,
            width: 800,
            height: 271,
            position: 'absolute',
            top: 680,
            left: 42,
            backgroundColor: '#00000058',
            border: '4px solid #fff',
            borderRadius: 15,
          }}></Box>
        <Nameplate
          index={0}
          view={viewSettings}
          position={{ x: viewSettings.initPos.x, y: viewSettings.initPos.y + viewSettings.height }}
          mainView={{ width: 973, height: 80, x: 925, y: 578 }}
          customFontSize={2.5}></Nameplate>
        <Nameplate
          index={1}
          view={viewSettings}
          position={{
            x: viewSettings.initPos.x,
            y: viewSettings.initPos.y + viewSettings.height,
          }}
          customHeight={55}
          customFontSize={1.6}></Nameplate>
        <Nameplate
          index={2}
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
        <CategoryName
          style={{
            top: 730,
            left: 1080,
            width: 600,
            fontSize: 56,
            padding: 20,
            borderBottom: 'solid',
            color: 'white',
          }}
        />
        <MainTimer
          style={{
            position: 'absolute',
            top: 850,
            left: 1180,
            width: 400,
            padding: 20,
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
