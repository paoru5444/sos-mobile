import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from './Auth/AuthLoadingScreen'

import SignInScreen from './Auth/SignInScreen'
import ResetPasswordScreen from './Auth/ResetPasswordScreen'

import HomeScreen from './Home/HomeScreen'
import DoctorScreen from './Home/DoctorScreen'
import DeafScreen from './Home/Deaf/DeafScreen'

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Doctor: DoctorScreen,
  Deaf: DeafScreen,
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