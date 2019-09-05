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

const QueixaComponent = ({ next, queixas }) => (
    <Fragment>
        <Wrapper>
        <View style={{ height: 10, }} />
            <ScrollView horizontal style={{ maxHeight: 120}}>

            <View style={{ width: 5, }} />
                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>
                <View style={{ width: 5 }} />
            </ScrollView>
            
            <View style={{ height: 20 }} />

            <Text size="22px">O que sentir para vir aqui?</Text>
            <View style={{ width: 5, height: 5 }} />
            
            <Row>
                <TextInput onChangeText={(text) => this.setState({ queixaInput: text })} />
            </Row>

            <View style={{ width: 5, height: 10 }} />

            <Row>
                <TouchableOpacity onPress={() => this.setState({queixas: [...this.state.queixas, this.state.queixaInput]})}>
                    <Row>
                    <Text size="22px">Adicionar Queixa</Text>
                    <View style={{ width: 5 }} />
                    <Icon name="plus-square" size={30} color="#333" />
                    </Row>
                </TouchableOpacity>
            </Row>

            <View style={{ height: 20 }} />

            <Text size="22px">O eu já falei:</Text>

            <Queixas>
            <ScrollView style={{ maxHeight: 250, }}>
                <Row>
                {queixas.map((queixa, index) => (
                    <Chip key={index}>
                        <>
                        {/* <Icon name="chevron-right" size={22} /> */}
                        <Text size="18px" color="#f2f2f2">{queixa}</Text>
                        </>
                    </Chip>
                ))}
                </Row>
            </ScrollView>
            </Queixas>     
        </Wrapper>    

        <Button onPress={() => next()} title="Historia da Doença"/>
    </Fragment>
);

export default QueixaComponent;