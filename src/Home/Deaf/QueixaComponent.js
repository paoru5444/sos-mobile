import React, { Fragment } from 'react'
import {
  View,
} from 'react-native'

import { 
  TouchableOpacity, ScrollView, Button,
} from 'react-native'

import {
  TextInput, Queixas, Text, CardQueixa, Chip,
} from '../HomeStyle'

import Icon from 'react-native-vector-icons/Feather'

import {
    Wrapper, Row
} from '../../styles'

const QueixaComponent = ({ next, queixas, getQueixaInput, adicionarQueixa }) => (
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
            
            <Row justify="flex-start">
                <Text size="22px">O que sentir para vir aqui?</Text>
                <View style={{ width: 5, height: 5 }} />
                <TextInput onChangeText={(text) => getQueixaInput(text)} />
            </Row>

            <View style={{ width: 5, height: 10 }} />

            <Row>
                <TouchableOpacity onPress={() => adicionarQueixa()}>
                    <Row justify="flex-start">
                        <Text size="22px">Adicionar Queixa</Text>
                        <View style={{ width: 5 }} />
                        <Icon name="plus-square" size={30} color="#333" />
                    </Row>
                </TouchableOpacity>
            </Row>

            <Row justify="flex-start">
                <View style={{ height: 60 }} />
                <Text size="22px">O eu já falei:</Text>
            </Row>

            <Queixas>
                <View style={{ height: 20 }} />
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