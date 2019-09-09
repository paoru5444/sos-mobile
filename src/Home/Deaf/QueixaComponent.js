import React, { Fragment } from 'react'
import {
  View,
} from 'react-native'

import { 
  TouchableOpacity, ScrollView,
} from 'react-native'

import {
  Queixas, CardQueixa, Chip,
} from '../HomeStyle'

import Icon from 'react-native-vector-icons/Feather'

import {
    Wrapper, Footer, Row, TextInput, Button, Text
} from '../../styles'


const QueixaComponent = ({ next, queixas, getQueixaInput, adicionarQueixa, goTo }) => (
    <Fragment>
        <Wrapper>
        <View style={{ height: 10, }} />
            <ScrollView horizontal style={{ maxHeight: 120}}>

            <View style={{ width: 5, }} />
                <CardQueixa onPress={() => goTo('Detalhes')}>
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
                <Text size="18px">O que sentir para vir aqui?</Text>
                <View style={{ width: 5, height: 5 }} />
                <TextInput onChangeText={(text) => getQueixaInput(text)} />
            </Row>

            <View style={{ width: 5, height: 10 }} />

            <Row>
                <TouchableOpacity onPress={() => adicionarQueixa()}>
                    <Row justify="flex-start">
                        <Text size="18px">Adicionar Queixa</Text>
                        <View style={{ width: 5 }} />
                        <Icon name="plus-square" size={30} color="#333" />
                    </Row>
                </TouchableOpacity>
            </Row>

            <Row justify="flex-start">
                <View style={{ height: 60 }} />
                <Text size="18px">O eu já falei:</Text>
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
        
        <Footer>
            <Button radius="0" width="100%" height="100%" onPress={() => next()}>
                <Text color="#f2f2f7">Historia da Doença</Text>
            </Button>
        </Footer>
    </Fragment>
);

export default QueixaComponent;