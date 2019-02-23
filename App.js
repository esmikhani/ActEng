
import { createStackNavigator, createAppContainer } from 'react-navigation';
import mainmenu from './pg/mainmenu';
import wordshow from './pg/wordshow';
import Det from './pg/Det';
import mapx from './pg/mapx';
import selc from './pg/selec';
import { Fot } from './pg/comps/Fot';
 import Sidebar from './pg/comps/Sidebar'
const MainNavigator = createStackNavigator({
  mainmenu: { screen: mainmenu },
  mapx: { screen: mapx },

  wordshow: { screen: wordshow },

  Det: { screen: Det },
  selc: { screen: selc },
  Fot: { screen: Fot },
  // Sidebar: { screen: Sidebar },
},
  {
    headerMode: 'none'

  }

);

const App = createAppContainer(MainNavigator);

export default App;



