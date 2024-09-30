import { render } from '../../../render';
import { ViewCanvas } from '../../components/canvas';
import { Footer } from '../../components/footer/index';
import { Nameplate } from '../../components/nameplate';
import { ViewSettings } from '../../components/nameplate';

const viewSettings: ViewSettings = {
  playerIndex: 2,
  width: 922,
  height: 519,
  initPos: { x: 25, y: 25 },
  margin: { x: 25, y: 110 },
};

const App: React.FC = () => {
  return (
    <div id="container">
      <ViewCanvas
        slotNumber={viewSettings.playerIndex}
        slotSize={{ width: viewSettings.width, height: viewSettings.height }}
        firstSlotPosition={{ x: viewSettings.initPos.x, y: viewSettings.initPos.y }}
        margin={{ x: viewSettings.margin.x, y: viewSettings.margin.y }}
        debug={false}
      />
      <Nameplate index={0} style={viewSettings}></Nameplate>
      <Nameplate index={1} style={viewSettings}></Nameplate>
      <Footer></Footer>
    </div>
  );
};

render(
  <>
    <App />
  </>,
);
