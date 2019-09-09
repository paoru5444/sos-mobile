import React, { Fragment, Component } from 'react'
import {
  View,
} from 'react-native'

import { 
  TouchableOpacity, ScrollView,
} from 'react-native'

import {
  TextInput,
} from '../HomeStyle'

import {
    Wrapper, Footer, Button, Text, Row, Card,
} from '../../styles'

import Icon from 'react-native-vector-icons/Feather'

const buttonLabelVoltar = 'Voltar'
const buttonLabelAvancar = 'Avancar'

class PatologicaComponent extends Component {

    static navigationOptions= { header: null }

    constructor(props) {
        super(props)

        this.state = {
            step: 0
        }
    }

    next = () => {
        const { step } = this.state;
        if (step <= 9) {
            this.setState({
                step: step + 1
            })
        }
    }

    prev = () => {
        const { step } = this.state;
        if (step >= 1) {
            this.setState({
                step: step - 1
            })
        }
    }

    renderItem = () => {
        const { step } = this.state;
  
        switch(step) {
          case 0:
            return (
                <Card>
                    <Text size="18px">Doenças infecciosas e parasitarias</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
          case 1:
            return (
                <Card>
                    <Text size="18px">Doenças alérgicas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
          case 2:
            return (
                <Card>
                    <Text size="18px">Doença sexualmente transmissível</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 3:
            return (
                <Card>
                    <Text size="18px">Doenças comuns na infância</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 4:
            return (
                <Card>
                    <Text size="18px">Intoxicações</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 5:
            return (
                <Card>
                    <Text size="18px">Doenças psíquicas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 6:
            return (
                <Card>
                    <Text size="18px">Intervenções cirúrgicas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 7:
            return (
                <Card>
                    <Text size="18px">Traumas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 8:
            return (
                <Card>
                    <Text size="18px">Diabetes Mellitus</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 9:
            return (
                <Card>
                    <Text size="18px">Hipertensão arterial</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
        case 10:
            return (
                <Card>
                    <Text size="18px">Outras Patologias</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>
                </Card>
            )
          default: 
              return (
                <Text>Algo aconteceu.</Text>
              )
        }
      }

    render() {
        const { step } = this.state;
        return (
            <ScrollView>
                <Wrapper>
                    { this.renderItem() }
                </Wrapper>

                <Footer>
                    <Row justify="flex-start">
                        <Text>Passo {step} de 10</Text>
                    </Row>
                    
                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">{ buttonLabelVoltar }</Text>
                        </Button>

                        <Button onPress={() => alert('gerar relatorio')}>
                            <Text color="#f2f2f7">Acabar</Text>
                        </Button>


                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">{ buttonLabelAvancar }</Text>
                        </Button>
                    </Row>

                    <View style={{ height: 5 }} />
                </Footer>
            </ScrollView>
        )
    }
}

export default PatologicaComponent;