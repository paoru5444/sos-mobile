import React, { useState, useEffect } from 'react'
import {
  Image, ScrollView, StyleSheet, TouchableOpacity, View,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { useNavigation } from 'react-navigation-hooks'

import { Text } from '../../common/Text'

export function DoctorNavigationOptions({ navigation }) {
  return {
    title: 'Sintomas e Recomendações',
    headerTintColor: '#f2f2f7',
      headerStyle: {
        backgroundColor: '#215583'
      },
      headerTitleStyle: {
        color: '#f2f2f7',
      },
  };
}

function DoctorScreen(props) {
  const [recommendations, setRecommendation] = useState([])
  const [drugs, setDrugs] = useState([])
  const [alimentation, setAlimentation] = useState([])
  const [complaint, setComplaint] = useState([])
  const [anamnese, setAnamnese] = useState({queixas: []})

  const { navigate } = useNavigation()

  useEffect(() => {
    setAnamnese(props.navigation.getParam('anamnese'))
    console.log(anamnese)
  }, [])

  return (
      <View style={styles.wrapper}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <Text color="#2c2c2c">Queixas: </Text>  
            <Text color="#2c2c2c" size="14">{anamnese.queixas.join('')}</Text>
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text color="#2c2c2c">Duracao</Text>  
              <Text color="#2c2c2c" size="14">{anamnese.duracao}</Text>
            </View>

            <View style={styles.column}>
              <Text color="#2c2c2c">Intensidade</Text>  
              <Text color="#2c2c2c" size="14">{anamnese.intensidade}</Text>
            </View> 
          </View>

          <View style={styles.row}>
            <View style={styles.column}>
              <Text color="#2c2c2c">Frequencia</Text>  
              <Text color="#2c2c2c" size="14">{anamnese.frequencia}</Text>
            </View> 

            <View style={styles.column}>
              <Text color="#2c2c2c">Localização</Text>  
              <Text color="#2c2c2c" size="14">{anamnese.localizacao}</Text>
            </View>
          </View> 
        </View>

        <View style={styles.grid}>
          <View style={styles.row}>
            <Image source={require('../../../assets/images/medicine.png')} style={styles.image} />
            { drugs.length === 0 ? (
              <View>
                <Text color="#2c2c2c">Medicação</Text>
                <Text color="#2c2c2c" size="14px">Nenhuma medicação registrada</Text>
                <Text color="#2c2c2c" size="14px">Recomendar agora!</Text>
              </View>
            ) : (
              <View>
                <Text color="#2c2c2c">Detalhes</Text>
              </View>
            )}
          </View>
        </View>

        <View style={styles.grid}>
          <View style={styles.row}>
            <Image source={require('../../../assets/images/clipboard.png')} style={styles.image} />
            { recommendations.length === 0 ? (
              <View>
                <Text color="#2c2c2c">Recomendações</Text>
                <Text color="#2c2c2c" size="14px">Nenhuma recomendação feita</Text>
                <Text color="#2c2c2c" size="14px">Recomendar agora!</Text>
              </View>
            ) : (
              <View>
                <Text color="#2c2c2c">Detalhes</Text>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity onPress={() => navigate('Alimentation')} style={styles.grid}>
          <View style={styles.row}>
          <Image source={require('../../../assets/images/diet.png')} style={styles.image} />
            { alimentation.length === 0 ? (
              <View>
                <Text color="#2c2c2c">Alimentação</Text>
                <Text color="#2c2c2c" size="14px">Nenhuma alimentação recomendada</Text>
                <Text color="#2c2c2c" size="14px">Recomendar agora!</Text>
              </View>
            ) : (
              <View>
                <Text color="#2c2c2c">Detalhes</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
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
    width: '48%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  grid: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  quotes: {
    width: 5,
    height: 5,
    margin: 5,
  }
})

export default DoctorScreen;