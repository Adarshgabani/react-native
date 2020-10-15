import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/homeScreen';
import ListScreen from './src/screens/listScreen';
import ComponentScreen from './src/screens/componentScreen';
import ImageScreen from './src/screens/imageScreen';
import CounterScreen from './src/screens/counterScreen';
import ColorScreen from './src/screens/colorScreen';
import ColorChangerAppScreen from './src/screens/colorChangerAppScreen';
import ColorChangerAppWithReducer from './src/screens/colorChangeAppScreenWithReducer'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ColorChangerApp: ColorChangerAppScreen,
    ColorChangerAppReducer: ColorChangerAppWithReducer
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator);