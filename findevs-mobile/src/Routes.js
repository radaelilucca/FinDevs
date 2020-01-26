import {createAppContainer} from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'FinDev'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Github Profile'
      }
    }
  }, {
    defaultNavigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#8E4DFF',
        

      }
    }
  })
)

export default Routes;