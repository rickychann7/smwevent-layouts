/** @jsxImportSource @emotion/react */
import { render } from '../../../render';
import { Nameplate } from '../../components/nameplate';
import { temporaryBackground } from '../../styles/global';

const App = () => {
  return (
    <div id="container" css={temporaryBackground}>
      <Nameplate index={0} />
      <Nameplate index={1} />
      <Nameplate index={2} />
    </div>
  );
};

render(<App />);
