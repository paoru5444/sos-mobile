import React, { Component, Fragment } from 'react'
import {
  View, Image,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'


import {
  WrapperHome, Footer, CardHome, RowHome, Text,
} from '../styles'

class HomeScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      title: 'Seja Bem vindo ao SOS Libras',
    };

    state = {}

    goTo = (route = "") => {
      this.props.navigation.navigate(route)
    }
  
    render() {
      return (
        <Fragment>
          <WrapperHome>
            <RowHome justify="flex-start">
              <CardHome align="flex-start" rotate="rotate(180deg)" onPress={() => this.goTo('Doctor')}>
                <Image source={require('../../assets/images/Home/doctor.png')} style={{ width: 150, height: 150, transform: [{ rotate: '180deg'}], }}/>
              </CardHome>
            </RowHome>
            
            <View style={{ height: 15 }} />

            <RowHome justify="flex-end">
              <CardHome onPress={() => this.goTo('AuthLoading')}>
              <Image source={require('../../assets/images/Home/injury.png')} style={{ width: 150, height: 150, right: 20,}}/>
              </CardHome>
            </RowHome>
          </WrapperHome>
        </Fragment>
      );
    }
  
    _showMoreApp = () => {
      this.props.navigation.navigate('Other');
    };
  
    _signOutAsync = async () => {
      await AsyncStorage.clear();
      this.props.navigation.navigate('Auth');
    };
}

export default HomeScreen;