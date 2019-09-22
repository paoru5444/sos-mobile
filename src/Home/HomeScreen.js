import React, { Component, Fragment } from 'react'
import {
  View, Image, TouchableHighlight
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import {
  WrapperHome, CardHome, RowHome,
} from '../styles'

import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components'

const Wrapper = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Row = styled(View)`
  width: 85%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

class HomeScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      title: 'Seja Bem vindo ao SOS Libras',
      header: null
    };

    state = {}

    goTo = (route = "") => {
      this.props.navigation.navigate(route)
    }
  
    render() {
      return (
        // background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);
          <Wrapper source={require('../../assets/images/Home/fundo.jpg')}>
            <LinearGradient colors={['#216583', '#217e83']} style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
              <Row>
                <TouchableHighlight onPress={() => this.goTo('Doctor')}>
                  <Image source={require('../../assets/images/Home/doctor.png')} style={{ width: 180, height: 180, }}/>
                </TouchableHighlight>
       
                <TouchableHighlight onPress={() => this.goTo('AuthLoading')}>
                  <Image source={require('../../assets/images/Home/injury.png')} style={{ width: 180, height: 180, }}/>
                </TouchableHighlight>
              </Row>
              
              {/* <RowHome>
                  <CardHome align="flex-start" rotate="rotate(180deg)" onPress={() => this.goTo('Doctor')}>
                    <Image source={require('../../assets/images/Home/doctor.png')} style={{ width: 150, height: 150, transform: [{ rotate: '180deg'}], }}/>
                  </CardHome>

                  <CardHome onPress={() => this.goTo('AuthLoading')}>
                  <Image source={require('../../assets/images/Home/injury.png')} style={{ width: 150, height: 150, right: 20,}}/>
                  </CardHome>
                </RowHome> */}
            </LinearGradient>
          </Wrapper>
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