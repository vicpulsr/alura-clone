import Routes from '../src/routes/Routes';

import Header from '../src/components/Header';
import SideMenu from './components/SideMenu';

import LessonsConfig from './config/LessonsConfig';
import MenuConfig from './config/MenuConfig';

import './style.scss';

function App() {
  return (
    <div className="App">
      <LessonsConfig >
      <MenuConfig>
        <SideMenu />
        <div className="content">
          <Header />
          <Routes />
        </div>
      </MenuConfig>
      </LessonsConfig>
    </div>
  );
}

export default App;
