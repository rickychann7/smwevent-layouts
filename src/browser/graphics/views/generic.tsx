import background from '../images/bg.png';
import { render } from '../../render';
import { Footer } from '../components/footer/index';

import '@fontsource-variable/m-plus-1';

const App: React.FC = () => {
  return (
    <div id="container">
      <div style={{ position: 'relative', width: '1920px', height: '1080px', overflow: 'hidden' }}>
        <img src={background} />
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
