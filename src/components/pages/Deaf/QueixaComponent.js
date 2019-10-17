import React from 'react'
import { 
  StyleSheet, ScrollView, View, Image, TouchableOpacity
} from 'react-native'

import {
  Button, Text, Wrapper, Queixas, CardQueixa,
} from '../Home/HomeStyle'

import {
  Input,
} from '../Auth/AuthStyle'

import Icon from 'react-native-vector-icons/Feather'
import IconMCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

const Queixa = ({ next, queixas, getQueixaInput, adicionarQueixa, goTo, queixaInput }) => (
    <ScrollView style={styles.scroll}>
        <Wrapper style={styles.wrapper}>
          {/* <Row justify="flex-start">
            <Text>Queixa Rápida </Text>
            <IconMCommunity name="truck-fast" size={24} color="#293462" />
          </Row> */}
          {/* <Row>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                
            </ScrollView>
          </Row> */}

          <View style={styles.row}>
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
          </View>

          <View style={styles.row}>
            <View style={styles.inputRow}>
              <Icon name="frown" size={24} color="#f2f2f2" />
              <Input
                placeholder="O que sentir para vir aqui?"
                onChangeText={(text) => getQueixaInput(text)}
                value={queixaInput}
              />
            </View>
            <TouchableOpacity onPress={() => adicionarQueixa()} style={styles.addButton}>
              <Icon name="plus" size={26} color="#f2f2f7" />
            </TouchableOpacity>
          </View>

            {/* <Row>
              <Button width="88%" onPress={() => adicionarQueixa()} transparent="transparent" outlined="#216583" border="1px">
                <Row>
                  <Text color="#216583">Adicionar Queixa</Text>
                  
                </Row>
              </Button>
            </Row> */}

            <Queixas>
              <View style={styles.row}>
                {queixas.map((queixa, index) => (
                  <Text style={styles.text} key={index}> {queixa} </Text>
                ))}
              </View>
            </Queixas>     

            <Button onPress={() => next()}>
                <Text color="#f2f2f7">Proximo Passo</Text>
            </Button>
        </Wrapper>
    </ScrollView>
);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    paddingTop: '5%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 120
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#216583',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputRow: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    backgroundColor: '#f2f2f7',
    borderRadius: 30,
    borderBottomColor: '#f2f2f7',
  },
  row: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    marginVertical: 10,
    flexWrap: 'wrap',
  },
});

export default Queixa;