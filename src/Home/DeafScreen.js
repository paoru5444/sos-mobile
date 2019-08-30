import React, { Component, Fragment } from 'react'
import {
  View
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import {
  Wrapper, Card, CardImage, CardRow, Text
} from './HomeStyle'

class DeafScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      title: 'Surdo',
    };

    state = {}

    goTo(route = "") {
      this.props.navigation.navigate(route)
    }
  
    render() {
      return (
        <Fragment>
          <Wrapper>
            <View style={{ height: 15 }} />
            <Card>
              <Text>
                Médico
              </Text>
            </Card>
          </Wrapper>
        </Fragment>
      );
    }
}

export default DeafScreen;