import React, { Fragment } from 'react'
import { 
  StyleSheet, ScrollView, View, Image, KeyboardAvoidingView
} from 'react-native'

import {
  Button, Footer, Text, Wrapper, Queixas, CardQueixa, Chip, Row
} from '../Home/HomeStyle'

import {
  RowInput, Input,
} from '../Auth/AuthStyle'

import Icon from 'react-native-vector-icons/Feather'
import IconMCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

// const colors = ['#447260', '#427676', '#84BFA8', '#3F9A82']
const colors = ['#f7be16']

const QueixaComponent = ({ next, queixas, getQueixaInput, adicionarQueixa, goTo, queixaInput }) => (
    <ScrollView style={styles.scroll}>
        <Wrapper>
          <Row justify="flex-start">
            <Text>Queixa Rápida </Text>
            <IconMCommunity name="truck-fast" size={24} color="#293462" />
          </Row>
          <Row>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CardQueixa onPress={() => getQueixaInput('Dor de Cabeça')}>
                  <Image source={require('../../../assets/images/Queixa/dor-cabeca.jpg')} style={styles.image} />
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa onPress={() => getQueixaInput('Fraquesa')} >
                  <Image source={require('../../../assets/images/Queixa/fraquesa.jpg')} style={styles.image} />
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa onPress={() => getQueixaInput('Tosse')}>
                  <Image source={require('../../../assets/images/Queixa/tosse.jpg')} style={styles.image} />
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa onPress={() => getQueixaInput('Tontura')}>
                  <Image source={require('../../../assets/images/Queixa/tontura.jpg')} style={styles.image} />
                </CardQueixa>
                <View style={{ width: 5 }} />

                <CardQueixa onPress={() => getQueixaInput('Alopecia')}>
                  <Image source={require('../../../assets/images/Queixa/alopecia.jpg')} style={styles.image} />
                </CardQueixa>
                <View style={{ width: 5 }} />

                <CardQueixa onPress={() => getQueixaInput('Dor no Joelho')}>
                  <Image source={require('../../../assets/images/Queixa/dor-joelho.jpg')} style={styles.image} />
                </CardQueixa>
                <View style={{ width: 5 }} />

                <CardQueixa onPress={() => getQueixaInput('Nauseas')}>
                  <Image source={require('../../../assets/images/Queixa/nauseas.jpg')} style={styles.image} />
                </CardQueixa>
                <View style={{ width: 5 }} />
            </ScrollView>
          </Row>

          <RowInput>
            <Icon name="frown" size={24} color="#BDBDBD" />
            <Input
              placeholder="O que sentir para vir aqui?"
              onChangeText={(text) => getQueixaInput(text)}
              value={queixaInput}
            />
          </RowInput>

            <Row>
              <Button width="88%" onPress={() => adicionarQueixa()} transparent="transparent" outlined="#216583" border="1px">
                <Row>
                  <Text color="#216583">Adicionar Queixa</Text>
                  <Icon name="plus" size={26} color="#00818a" />
                </Row>
              </Button>
            </Row>

            <Queixas>
              <ScrollView style={{ maxHeight: 300, }}>
                  <Row>
                  {queixas.map((queixa, index) => (
                    // <Chip key={index} color={colors[Math.floor(Math.random() * 3)]}>
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
            <Button onPress={() => next()}>
                <Text color="#f2f2f7">Historia da Doença</Text>
            </Button>
        </Footer>
    </ScrollView>
);

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 120
  }
})

export default QueixaComponent;