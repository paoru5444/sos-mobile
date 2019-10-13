import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import { Text } from '../../../common/Text'

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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
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
  }
})

export default Alimentation;