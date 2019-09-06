import React, { Component, Fragment } from 'react'
import {
  View, BackHandler
} from 'react-native'

import {
  TextInput, Row, Queixas, Text, Wrapper, CardQueixa, Chip,
} from '../HomeStyle'


import QueixaComponent from './QueixaComponent'
import HistoriaComponent from './HistoriaComponent'
import PatologicaComponent from './PatologicaComponent'

class DeafScreen extends Component {
    static navigationOptions = {
      title: 'Queixa Principal',
    };

    componentDidMount() {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

  
    handleBackPress = () => {
      const { step } = this.state;
      if (step >= 1) {
        this.prev() 
        return true
      } 

      return false
    }

    constructor(props)  {
      super(props)
      
      this.state = {
        step: 0,
        queixas: [],
        queixaInput: '',
      }

      this.next = this.next.bind(this)
      this.adicionarQueixa = this.adicionarQueixa.bind(this)
      this.getQueixaInput = this.getQueixaInput.bind(this)
    }

    next = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      })
    }

    prev = () => {
      const { step } = this.state;
      if (step >= 1) {
        this.setState({
          step: step -1
        })
      }
      console.warn('step', step)
    }

    getQueixaInput = (queixa) => {
      this.setState({
        queixaInput: queixa,
      })
    }
    adicionarQueixa = () => {
      console.warn(this.state.queixaInput)
      this.setState({queixas: [...this.state.queixas, this.state.queixaInput]})
    }
 
    goTo(route = "") {
      this.props.navigation.navigate(route)
    }
  
    renderItem = () => {
      const { step, queixas, queixaInput } = this.state;

      switch(step) {
        case 0:
          return (
            // Queixa Principal
            <QueixaComponent
              next={this.next}
              queixas={queixas}
              getQueixaInput={this.getQueixaInput}
              adicionarQueixa={this.adicionarQueixa}
            />
          )
        case 1:
          return (
            <HistoriaComponent next={this.next} />
          )
        case 2:
          return (
            <PatologicaComponent />
          )
        case 3:
          return (
            <Text>História Fisiológica</Text>
          )
        default: 
            return (
              <Text>Algo aconteceu.</Text>
            )
      }
    }

    render() {
      return (
        <Fragment>
          { this.renderItem() }
        </Fragment>
      );
    }
}

export default DeafScreen;