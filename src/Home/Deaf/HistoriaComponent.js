import React, { Fragment } from 'react'
import {
  View,
} from 'react-native'

import { 
  TouchableOpacity, ScrollView, Button,
} from 'react-native'

import {
  TextInput, Row, Queixas, Text, Wrapper, CardQueixa, Chip,
} from '../HomeStyle'

import Icon from 'react-native-vector-icons/Feather'

const QueixaComponent = ({ next }) => (
    <Fragment>
        <Wrapper>
        <View style={{ height: 10, }} />
            
            <View style={{ height: 20 }} />

            
            <Text size="22px">Duração</Text>
            <Row>
                <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
            </Row>


            <Text size="22px">Frequência</Text>
            <Row>
                <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
            </Row>


            <Text size="22px">Intensidade</Text>
            <Row>
                <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
            </Row>


            <Text size="22px">Melhora, Piora</Text>
            <Row>
                <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
            </Row>


            <Text size="22px">Fatores associados</Text>
            <Row>
                <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
            </Row>


            <Text size="22px">Como está agora?</Text>
            <Row>
                <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
            </Row> 

            <View style={{ width: 5, height: 10 }} />
        </Wrapper>    

        <Button onPress={() => next()} title="História patológica pregressa"/>
    </Fragment>
);

export default QueixaComponent;