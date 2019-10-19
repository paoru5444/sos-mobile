import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Feather from 'react-native-vector-icons/Feather'

import { Input } from '../../Auth/AuthStyle'

import { Button } from '../../Home/HomeStyle'

export function alimentationOptions({ navigate }) {
  return {
    title: 'Alimentos',
    headerTintColor: '#f2f2f7',
      headerStyle: {
        backgroundColor: '#215583'
      },
      headerTitleStyle: {
        color: '#f2f2f7',
      },
  }
}

function Alimentation() {

  const [aliments, setAliments] = useState([])
  const [inputAliment, setInputAliment] = useState('')

  function alimentsHandler() {
    setAliments([...aliments, inputAliment])
    setInputAliment('')
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.banner}>
        <ImageBackground style={styles.imageBanner} source={require('../../../../assets/images/alimentation.png')}>
        </ImageBackground>
      </View>

      <View style={styles.row}>
        <Image source={require('../../../../assets/images/diet.png')} style={styles.image} /> 
        <Text color="#2c2c2c" size="20px">Selecione os alimentos{'\n'}que serão evitados.</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.inputRow}>
          <Feather name="frown" size={24} color="#bdbdbd" />
          <Input
            placeholder="Digite o nome dos alimentos"
            onChangeText={(text) => setInputAliment(text)}
            defaultValue=""
          />
        </View>
        <TouchableOpacity onPress={() => alimentsHandler()} style={styles.addButton}>
          <Feather name="plus" size={26} color="#f2f2f7" />
        </TouchableOpacity>
      </View>

      <View style={{...styles.row, width: '80%', alignItems: 'center', flexDirection: 'column'}}>
        {aliments && aliments.map((queixa, index) => (
          <Text style={styles.text} key={index}> {queixa} </Text>
        ))}

        <Button onPress={() => next()}>
          <Text style={{color: '#f2f2f7', fontSize: 16 }}>Salvar Alimentos</Text>
        </Button>
      </View>

      {/* <View style={styles.row}>
        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/carboidratos.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Carboidratos</Text>
        </View>

        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/vegetais.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Verduras e Legumes</Text>
        </View>

        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/frutas.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Frutas</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/leite.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Leite e derivados</Text>
        </View>

        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/carne.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Carnes e Ovos</Text>
        </View>

        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/leguminosas.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Leguminosos e Oleaginosas</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/oleo.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Óleos e Gorduras</Text>
        </View>

        <View style={styles.column}>
          <Image source={require('../../../../assets/images/piramide/acucar.png')} style={styles.imagePiramide} /> 
          <Text color="#2c2c2c" size="14px">Açúcares e Doces</Text>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    flexWrap: 'wrap',
  },
  column: {
    width: '30%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  banner: {
    width: '100%',
    height: '25%',
    backgroundColor: "transparent",
    padding: 0,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  imageBanner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  imagePiramide: {
    width: 90,
    height: 90,
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
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#216583',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    alignSelf: "flex-start",
    color: '#2c2c2c',
    fontSize: 16
  }
})

export default Alimentation;