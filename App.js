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
import CounterScreenWithReducer from './src/screens/counterScreenWithReducer';
import textInputScreen from './src/screens/textInputScreen';
import TextInputScreen from './src/screens/textInputScreen';




const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    CounterReducer: CounterScreenWithReducer,
    Color: ColorScreen,
    ColorChangerApp: ColorChangerAppScreen,
    ColorChangerAppReducer: ColorChangerAppWithReducer,
    TextInput: TextInputScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator);