import Routes from '../src/routes/Routes';

import Header from '../src/components/Header';
import SideMenu from './components/SideMenu';

import LessonsConfig from './config/LessonsConfig';

import './style.scss';

function App() {
  return (
    <div className="App">
      <LessonsConfig >
        <div>
          <Header />
          <Routes />
        </div>
        <SideMenu />
      </LessonsConfig>
    </div>
  );
}

export default App;
