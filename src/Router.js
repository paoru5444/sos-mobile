import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './components/pages/Auth/AuthLoadingScreen'

import SignInScreen from './components/pages/Auth/Login'
import ResetPasswordScreen from './components/pages/Auth/Reset'
import RegisterScreen from './components/pages/Auth/Register'

import HomeScreen from './components/pages/Home'
import DeafScreen from './components/pages/Deaf/DeafScreen'
import Reports from './components/pages/Home/Reports'
import FimQueixa, { navigationOptions } from './components/pages/FimQueixa'

// Doctor part
import DoctorScreen, { DoctorNavigationOptions } from './components/pages/Doctor/DoctorScreen'
import Alimentation, { alimentationOptions } from './components/pages/Doctor/Alimentation'

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Doctor: {
    screen: DoctorScreen,
    navigationOptions: DoctorNavigationOptions
  },
  Deaf: DeafScreen,
  Reports: {
    screen: Reports,
    navigationOptions: {
      title: 'Registros Cadastrados',
      headerTransparent: true,
      headerTitleStyle: {
        color: '#f2f2f7'
      },
      headerTintColor: '#f2f2f7',
    }
  },
  FimQueixa: {
    screen: FimQueixa,
    navigationOptions: navigationOptions
  },
  Alimentation: {
    screen: Alimentation,
    navigationOptions: alimentationOptions,
  }
});

const AuthStack = createStackNavigator({
  SignIn: SignInScreen,
  Reset: ResetPasswordScreen,
  Register: RegisterScreen,
});

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));