import React from 'react'
import {
  Image, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native'

import {
  Button
} from '../Home/HomeStyle'

import Feather from 'react-native-vector-icons/Feather'
import Slider from '@react-native-community/slider';
import { useNavigation } from 'react-navigation-hooks'

const Historia =  ({
    getDuracao, duracao,
    getFrequencia, frequencia,
    getIntensidade, intensidade,
    getLocalizacao, localizacao, makeAtendence,
}) => {

  const { navigate } = useNavigation()
  
  return (
    <View style={styles.wrapper}>
        <View style={styles.field}>
          <Text style={styles.text}>Duração</Text>

          <View style={styles.squareField}>
            <TouchableOpacity onPress={() => getDuracao('-')}>
              <Text style={{...styles.text, fontSize: 30}}>-</Text>
            </TouchableOpacity>
            
            <Text style={{...styles.text, fontSize: 18}}>{duracao} dias</Text>

            <TouchableOpacity onPress={() => getDuracao('+')}>
              <Text style={{...styles.text, fontSize: 20}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.text}>Intensidade: { intensidade <= 1 && ' Baixa' ||
                  intensidade > 1 && intensidade <= 2 && ' Media' ||
                  intensidade > 2 && ' Alta' }</Text>
          <View style={styles.squareField}>
            <Slider
              style={{width: '100%',}}
              minimumValue={1}
              maximumValue={3}
              minimumTrackTintColor="#215583"
              maximumTrackTintColor="#000000"
              onValueChange={(value) => getIntensidade(value)}
            />
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.text}>Frequencia</Text>
          <View style={styles.squareField}>
            <TouchableOpacity onPress={() => getFrequencia('-')}>
              <Text style={{...styles.text, fontSize: 30}}>-</Text>
            </TouchableOpacity>

            <Text style={{...styles.text, fontSize: 18}}>{frequencia} em {frequencia} horas </Text>

            <TouchableOpacity onPress={() => getFrequencia('+')}>
              <Text style={{...styles.text, fontSize: 20}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.field}>
          <Text style={styles.text}>Localização</Text>
          <View style={styles.squareField}>
            <TouchableOpacity onPress={() => getLocalizacao('membros')} style={{ alignItems: 'center'}}>
              <Image source={require('../../../assets/images/historia/broken-arm.png')} style={styles.localizacaoImage} />
              <Text>Membros {localizacao[0] && <Feather name="check" size={20} color="green" />}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => getLocalizacao('torco')} style={{ alignItems: 'center'}}>
              <Image source={require('../../../assets/images/historia/abs.png')} style={styles.localizacaoImage} />
              <Text>Torço {localizacao[1] && <Feather name="check" size={20} color="green" />}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => getLocalizacao('cabeca')} style={{ alignItems: 'center'}}>
              <Image source={require('../../../assets/images/historia/head.png')} style={styles.localizacaoImage} />
              <Text>Cabeça {localizacao[2] && <Feather name="check" size={20} color="green" />}</Text> 
            </TouchableOpacity>
          </View>
        </View>

        <Button onPress={() => makeAtendence()}>
            <Text style={{...styles.text, color: '#f2f2f7'}}>Finalizar Queixa</Text>
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  },
  form: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingLeft: 20,
  },
  field: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingVertical: 10,
  },
  input: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#2c2c2c',
  },
  errorMessage: {
    color: '#f0134d',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#2c2c2c',
    fontSize: 16,
  },
  squareField: {
    width: '60%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  localizacaoImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  }
})

export default Historia