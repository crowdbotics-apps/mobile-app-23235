import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3183289Navigator from '../features/BlankScreen3183289/navigator';
import EmailAuth2183014Navigator from '../features/EmailAuth2183014/navigator';
import Feed3183013Navigator from '../features/Feed3183013/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3183289: { screen: BlankScreen3183289Navigator },
EmailAuth2183014: { screen: EmailAuth2183014Navigator },
Feed3183013: { screen: Feed3183013Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
