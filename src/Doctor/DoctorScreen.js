import React, { Component, Fragment } from 'react'
import {
  View
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import {
  Wrapper, Row, Text
} from '../styles'

class DoctorScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      title: 'Relatório',
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
              <Row justify="flex-start">
                <Text size={22}> Queixas: </Text>
              </Row>

              <Row justify="flex-start">
                <Text size={22}> Duração:  </Text>
              </Row>
              
              <Row justify="flex-start">
                <Text size={22}>Constância: </Text>
              </Row>

              <Row justify="flex-start">
                <Text size={22}>Frequência: </Text>
              </Row>

              <Row justify="flex-start">
                <Text size={22}>Intensidade: </Text>
              </Row>

              <Row justify="flex-start">
                <Text size={22}>Melhora ou Piora: </Text>
              </Row>

              <Row justify="flex-start">
                <Text size={22}>Como está agora: </Text>
              </Row>

              <Row justify="flex-start">
                <Text size={22}>Fatores associados: </Text>
              </Row>
          </Wrapper>
        </Fragment>
      );
    }
}

export default DoctorScreen;