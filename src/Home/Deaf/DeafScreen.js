import React, { Component, Fragment } from 'react'
import {
  View, BackHandler
} from 'react-native'

import {
  TextInput, Row, Queixas, Text, Wrapper, CardQueixa, Chip,
} from '../HomeStyle'


import QueixaComponent from './QueixaComponent'
import HistoriaComponent from './Historia/HistoriaComponent'
import PatologicaComponent from './PatologicaComponent'

class DeafScreen extends Component {

  static navigationOptions = ({navigation}) => {
    
    return {
      title: 'Anamnese',
      headerTintColor: '#f2f2f7',
      headerStyle: {
        backgroundColor: '#215583'
      },
      headerTitleStyle: {
        color: '#f2f2f7',
      },
    }
  }
    choseTitle() {
      const { step } = this.state;
      
      switch(step) {
        case 0:
          return 'Queixa Principal'
        case 1:
          return 'Historia da Doença'
        case 2:
          return 'Historia Patologica Pregressa'
      }
    }

    componentDidMount() {
      this.props.navigation.setParams({ choseTitle: this.choseTitle() })
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
        duracaoSlider: 0,
        frequenciaPicker: '',
        intensidadeSlider: 0,
        situacao: false,
      }

      this.next = this.next.bind(this)
      this.adicionarQueixa = this.adicionarQueixa.bind(this)
      this.getQueixaInput = this.getQueixaInput.bind(this)

      this.getDuracao = this.getDuracao.bind(this)
      this.getFrequencia = this.getFrequencia.bind(this)
      this.getIntensidade = this.getIntensidade.bind(this)
      this.getSituacao = this.getSituacao.bind(this)

      this.goTo = this.goTo.bind(this)
    }

    next = () => {
      const { step } = this.state;
      this.setState({
        step: step + 1
      })
      this.props.navigation.setParams({ choseTitle: this.choseTitle() })
    }

    prev = () => {
      const { step } = this.state;
      if (step >= 1) {
        this.setState({
          step: step -1
        })
      }
      this.props.navigation.setParams({ choseTitle: this.choseTitle() })
    }

    getQueixaInput = (queixa) => {
      this.setState({
        queixaInput: queixa,
      })
    }

    getDuracao = (duracao) => {
      this.setState({
        duracaoSlider: parseInt(duracao),
      })
    }

    getFrequencia = (frequencia) => {
      this.setState({
        frequenciaPicker: frequencia,
      })
    }

    getIntensidade = (intensidade) => {
      this.setState({
        intensidadeSlider: intensidade,
      })
    }

    getSituacao = (situacao) => {
      this.setState({ situacao })
    }

    adicionarQueixa = () => {
      this.setState({queixas: [...this.state.queixas, this.state.queixaInput]})
    }
    
    goTo(route = "") {
      this.props.navigation.navigate(route)
    }
  
    renderItem = () => {
      const { step, queixas, duracaoSlider, frequenciaPicker, intensidadeSlider, situacao } = this.state;
      
      switch(step) {
        case 0:
          return (
            // Queixa Principal
            <QueixaComponent
              next={this.next}
              queixas={queixas}
              getQueixaInput={this.getQueixaInput}
              adicionarQueixa={this.adicionarQueixa}
              goTo={this.goTo}
            />
          )
        case 1:
          return (
            <HistoriaComponent
              next={this.next}
              getDuracao={this.getDuracao}
              duracaoSlider={duracaoSlider}
              getFrequencia={this.getFrequencia}
              frequenciaPicker={frequenciaPicker}
              getIntensidade={this.getIntensidade}
              intensidadeSlider={intensidadeSlider}
              getSituacao={this.getSituacao}
              situacao={situacao}
            />
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