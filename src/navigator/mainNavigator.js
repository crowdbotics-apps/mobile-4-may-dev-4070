import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth3622Navigator from '../features/EmailAuth3622/navigator';
import EmailAuth3620Navigator from '../features/EmailAuth3620/navigator';
import EmailAuth3618Navigator from '../features/EmailAuth3618/navigator';
import EmailAuth3616Navigator from '../features/EmailAuth3616/navigator';
import EmailAuth3614Navigator from '../features/EmailAuth3614/navigator';
import EmailAuth3612Navigator from '../features/EmailAuth3612/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth3622: { screen: EmailAuth3622Navigator },
EmailAuth3620: { screen: EmailAuth3620Navigator },
EmailAuth3618: { screen: EmailAuth3618Navigator },
EmailAuth3616: { screen: EmailAuth3616Navigator },
EmailAuth3614: { screen: EmailAuth3614Navigator },
EmailAuth3612: { screen: EmailAuth3612Navigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
