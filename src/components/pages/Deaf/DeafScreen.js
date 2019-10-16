import React, { Component, Fragment } from 'react'
import {
  BackHandler, StyleSheet, View,
} from 'react-native'

import {
  Text,
} from '../Home/HomeStyle'


import QueixaComponent from './QueixaComponent'
import Historia from './Historia'

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

      this.makeAtendence = this.makeAtendence.bind(this)

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

    makeAtendence = async () => {
      // queixa: String,
      // duracao: String,
      // intensidade: String,
      // frequencia: String,
      // melhora_piora: String,
      const { queixas, duracaoSlider, frequenciaPicker, intensidadeSlider, situacao } = this.state
    }
  
    renderItem = () => {
      const { step, queixas, duracaoSlider, frequenciaPicker, intensidadeSlider, situacao, queixaInput } = this.state;
      
      switch(step) {
        case 1:
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
        case 0:
          return (
            <Historia
              next={this.next}
              getDuracao={this.getDuracao}
              duracaoSlider={duracaoSlider}
              getFrequencia={this.getFrequencia}
              frequenciaPicker={frequenciaPicker}
              getIntensidade={this.getIntensidade}
              intensidadeSlider={intensidadeSlider}
              getSituacao={this.getSituacao}
              situacao={situacao}
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
    return (
      <View style={styles.wrapper}>
        { this.renderItem() }
      </View>
    );
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