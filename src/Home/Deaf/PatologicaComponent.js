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
    Wrapper, Button, Text, Row,
} from '../../styles'

import Icon from 'react-native-vector-icons/Feather'

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

    renderItem = () => {
        const { step } = this.state;
  
        switch(step) {
          case 0:
            return (
                <Fragment>
                    <Text size="22px">Doenças infecciosas e parasitarias</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
          case 1:
            return (
                <Fragment>
                    <Text size="22px">Doenças alérgicas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
          case 2:
            return (
                <Fragment>
                    <Text size="22px">Doença sexualmente transmissível</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 3:
            return (
                <Fragment>
                    <Text size="22px">Doenças comuns na infância</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 4:
            return (
                <Fragment>
                    <Text size="22px">Intoxicações</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 5:
            return (
                <Fragment>
                    <Text size="22px">Doenças psíquicas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 6:
            return (
                <Fragment>
                    <Text size="22px">Intervenções cirúrgicas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 7:
            return (
                <Fragment>
                    <Text size="22px">Traumas</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 8:
            return (
                <Fragment>
                    <Text size="22px">Diabetes Mellitus</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 9:
            return (
                <Fragment>
                    <Text size="22px">Hipertensão arterial</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
            )
        case 10:
            return (
                <Fragment>
                    <Text size="22px">Outras Patologias</Text>
                    <View style={{ width: 5, height: 5 }} />
                    
                    <Row>
                        <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
                    </Row>

                    <Row justify="space-between">
                        <Button onPress={() => this.prev()}>
                            <Text color="#f2f2f7">Voltar para anterios</Text>
                        </Button>
                        <Button onPress={() => this.next()}>
                            <Text color="#f2f2f7">Ir para próximo</Text>
                        </Button>
                    </Row>
                </Fragment>
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
            <Wrapper>
                { this.renderItem() }
                <Row>
                    <Text>Passo {step} de 10</Text>
                </Row>
                <View style={{ height: 80 }} />
                <Button onPress={() => this.props.next()}>
                    <Text color="#f2f2f7">História fisiológica</Text>
                </Button>
            </Wrapper>
        )
    }
}

export default PatologicaComponent;