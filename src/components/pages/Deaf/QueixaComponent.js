import React from 'react'
import { 
  StyleSheet, ScrollView, View, Image, Text, TouchableOpacity
} from 'react-native'

import {
  Button, CardQueixa,
} from '../Home/HomeStyle'

import {
  Input,
} from '../Auth/AuthStyle'

import Icon from 'react-native-vector-icons/Feather'
import IconMCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

const images = [
  {name: "Dor de Cabeça", img: require("../../../assets/images/Queixa/dor-cabeca.jpg") },
  {name: "Fraquesa", img: require("../../../assets/images/Queixa/fraquesa.jpg") },
  {name: "Tosse", img: require("../../../assets/images/Queixa/tosse.jpg") },
  {name: "Tontura", img: require("../../../assets/images/Queixa/tontura.jpg") },
  {name: "Alopecia", img: require("../../../assets/images/Queixa/alopecia.jpg") },
  {name: "Dor no Joelho", img: require("../../../assets/images/Queixa/dor-joelho.jpg") },
  {name: "Nauseas", img: require("../../../assets/images/Queixa/nauseas.jpg") },
  {name: "Lombalgia", img: require("../../../assets/images/Queixa/lombalgia.png") },
  {name: "Dor Abdominal Difusa", img: require("../../../assets/images/Queixa/dor-abdominal-difusa.jpg") },
  {name: "Febre", img: require("../../../assets/images/Queixa/febre.jpg") },
  {name: "Manchas na Pele", img: require("../../../assets/images/Queixa/mancha-pele.jpg") },
  {name: "Sindrome Gripal", img: require("../../../assets/images/Queixa/gripe.jpg") },
  {name: "Alergia", img: require("../../../assets/images/Queixa/alergia.jpeg") },
  {name: "Disuria", img: require("../../../assets/images/Queixa/disuria.jpeg") },
]
const Queixa = ({ next, queixas, getQueixaInput, adicionarQueixa, goTo, queixaInput }) => (
    <ScrollView style={styles.scroll}>
        <View style={styles.wrapper}>
          <View style={{...styles.row, justifyContent: 'center'}}>
            { images.map((img, index) => {
              return (
                <CardQueixa onPress={() => getQueixaInput(img.name)} key={index}>
                  <Image source={img.img} style={styles.image} />
                </CardQueixa>
              )
            })}
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

          <View style={{...styles.row, width: '80%', alignItems: 'center', flexDirection: 'column'}}>
            {queixas.map((queixa, index) => (
              <Text style={styles.text} key={index}> {queixa} </Text>
            ))}
          </View>

          <Button onPress={() => next()}>
              <Text color="#f2f2f7">Proximo Passo</Text>
          </Button>
        </View>
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
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  text: {
    alignSelf: "flex-start",
    color: '#2c2c2c',
    fontSize: 16
  }
});

export default Queixa;