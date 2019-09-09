import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './Auth/AuthLoadingScreen'

import SignInScreen from './Auth/SignInScreen'
import ResetPasswordScreen from './Auth/ResetPasswordScreen'

import HomeScreen from './Home/HomeScreen'
import Detalhes from './Home/Deaf/Historia/Detalhes'
import DeafScreen from './Home/Deaf/DeafScreen'

import DoctorScreen from './Doctor/DoctorScreen'

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Doctor: DoctorScreen,
  Deaf: DeafScreen,
  Detalhes: Detalhes
});

const AuthStack = createStackNavigator({ SignIn: SignInScreen, Reset: ResetPasswordScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'App',
  }
));