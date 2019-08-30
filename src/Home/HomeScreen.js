import React, { Component, Fragment } from 'react'
import {
  View
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import {
  Wrapper, Card, CardImage, CardRow, Text
} from './HomeStyle'

class HomeScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      title: 'Escolha',
    };

    state = {}

    goTo = (route = "") => {
      this.props.navigation.navigate(route)
    }
  
    render() {
      return (
        <Fragment>
          <Wrapper>
            <Card onPress={() => this.goTo('Doctor')}>
              <Text>
                Médico
              </Text>
            </Card>

            <View style={{ height: 15 }} />

            <Card onPress={() => this.goTo('AuthLoading')}>
              <Text>
                Paciente
              </Text>
            </Card>
          </Wrapper>
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