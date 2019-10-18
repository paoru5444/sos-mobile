import React, { Component, Fragment } from 'react'
import {
  BackHandler, StyleSheet, View,
} from 'react-native'

import {
  Text,
} from '../Home/HomeStyle'

import LinearGradient from 'react-native-linear-gradient'

import QueixaComponent from './QueixaComponent'
import Historia from './Historia'
import api from '../../../server/api'

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
      duracao: 1,
      frequencia: 1,
      intensidade: 0,
      localizacao: [],
    }

    this.next = this.next.bind(this)
    this.adicionarQueixa = this.adicionarQueixa.bind(this)
    this.getQueixaInput = this.getQueixaInput.bind(this)

    this.getDuracao = this.getDuracao.bind(this)
    this.getFrequencia = this.getFrequencia.bind(this)
    this.getIntensidade = this.getIntensidade.bind(this)
    this.getLocalizacao = this.getLocalizacao.bind(this)

    this.makeAtendence = this.makeAtendence.bind(this)

    this.goTo = this.goTo.bind(this)
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
  }

  getQueixaInput = (queixa) => {
    this.setState({
      queixaInput: queixa,
    })
  }

  getDuracao = (sign) => {
    const { duracao } = this.state
    if (duracao >= 1) {
      this.setState({
        duracao: sign === '+' ? duracao + 1 : duracao - 1 ,
      })
    }
  }

  getFrequencia = (sign) => {
    const { frequencia } = this.state
    if (frequencia >= 1) {
      this.setState({
        frequencia: sign === '+' ? frequencia + 1 : frequencia - 1 ,
      })
    }
  }

  getIntensidade = (intensidade) => {
    console.log(intensidade)
    this.setState({
      intensidade
    })
  }

  getLocalizacao = (loc) => {
    const { localizacao } = this.state;
    const hasSameData = localizacao.some(o => o === loc)
    if (hasSameData) return
    this.setState({localizacao: [...this.state.localizacao, loc]})
  }

  getCRM = (crm) => {
    console.log('crm')
    this.setState({crm})
  }

  adicionarQueixa = () => {
    this.setState({queixas: [...this.state.queixas, this.state.queixaInput]})
  }
  
  goTo(route = "", params = {}) {
    this.props.navigation.navigate(route, params)
  }

  makeAtendence = async () => {
    const {queixas, duracao, frequencia, intensidade, localizacao } = this.state
  
    this.goTo('FimQueixa', {
      anamnese: {
        queixas,
        duracao,
        frequencia,
        intensidade: this.intensidadeHandler(intensidade),
        localizacao}
      })
  }

  intensidadeHandler(intensidade) {
    switch(intensidade) {
      case 1: return 'Baixa'
      case 2: return 'Media'
      case 3: return 'Alta'
      default: return 'Mediano'
    }
  }

  renderItem = () => {
    const { step, queixas, duracao, frequencia, intensidade, localizacao, queixaInput } = this.state;
    
    switch(step) {
      case 0:
        return (
          <QueixaComponent
            next={this.next}
            queixas={queixas}
            getQueixaInput={this.getQueixaInput}
            adicionarQueixa={this.adicionarQueixa}
            goTo={this.goTo}
            queixaInput={queixaInput}
          />
        )
      case 1:
        return (
          <Historia
            getDuracao={this.getDuracao}
            duracao={duracao}
            getFrequencia={this.getFrequencia}
            frequencia={frequencia}
            getIntensidade={this.getIntensidade}
            intensidade={intensidade}
            getLocalizacao={this.getLocalizacao}
            localizacao={localizacao}
            makeAtendence={this.makeAtendence}
          />
        )
      default: 
          return (
            <Text>Tela não encontrada.</Text>
          )
    }
  }

  render() {
    return this.renderItem()
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default DeafScreen;