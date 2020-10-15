import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/homeScreen';
import ListScreen from './src/screens/listScreen';
import ComponentScreen from './src/screens/componentScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    Giitt: githome,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(navigator);