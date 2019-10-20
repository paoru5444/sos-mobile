import React, { useState, useEffect } from 'react'
import {
  Image, ScrollView, StyleSheet, TouchableOpacity, View,
} from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { useNavigation } from 'react-navigation-hooks'

import { Text } from '../../common/Text'
import { Input } from '../Auth/AuthStyle'
import { Button } from '../Home/HomeStyle'
import api from '../../../server/api'

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
  const [recomendation, setRecommendation] = useState('')
  const [drugs, setDrugs] = useState([])
  const [alimentation, setAlimentation] = useState([])
  const [complaint, setComplaint] = useState([])
  const [anamnese, setAnamnese] = useState({queixas: []})

  const { navigate, push } = useNavigation()

  useEffect(() => {
    setAnamnese(props.navigation.getParam('anamnese'))

    getAlimentation()
    getDrugs()
  }, [])

  async function getAlimentation(){
    try {
      const response = await api.get(`/alimentation/${anamnese._id}`)
      setAlimentation(response.data)
      console.log(response.data)
    } catch(error) {
      console.log(error.response.data)
    }
  }
  
  async function getDrugs(){
    try {
      const response = await api.get(`/drugs/${anamnese._id}`)
      console.log(response.data)
      setDrugs(response.data)
    } catch(error) {
      console.log(error.response.data)
    }
  }

  async function saveHandler() {
    const save = await api.post('/recomendation', { recomendation, anamneseId: anamnese._id})
    push('Reports')
  }

  return (
    <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
          <View style={styles.grid}>
            <View style={styles.row}>
              <Text color="#2c2c2c">Queixas: </Text>  
              <Text color="#2c2c2c" size="14">{anamnese.queixas.join('') || 'Sem queixas cadastradas' }</Text>
            </View>

            <View style={styles.row}>
              <View style={styles.column}>
                <Text color="#2c2c2c">Duracao: {anamnese.duracao + ' dia(s)' || 'Sem duração'}</Text>  
              </View>

              <View style={styles.column}>
                <Text color="#2c2c2c">Intensidade: {anamnese.intensidade || 'Sem intensidade'}</Text>  
              </View> 
            </View>

            <View style={styles.row}>
              <Text color="#2c2c2c">Frequencia: {anamnese.frequencia + ' em ' + anamnese.frequencia + 'hora(s)' || 'Sem frequencia'}</Text>  

              {/* <View style={styles.column}>
                <Text color="#2c2c2c">Localização</Text>  
                <Text color="#2c2c2c" size="14">{anamnese.localizacao}</Text>
              </View> */}
            </View> 
          </View>

          <TouchableOpacity onPress={() => props.navigation.navigate('Drugs', { anamnese })} style={styles.grid}>
            <View style={styles.row}>
              <Image source={require('../../../assets/images/medicine.png')} style={styles.image} />
              <View>
                <Text color="#2c2c2c">Medicação</Text>
                <Text color="#2c2c2c" size="14px">
                  {drugs.length + ' Medicamentos cadastrados'}</Text>
                <Text color="#2c2c2c" size="14px">Recomendar agora!</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => props.navigation.navigate('Alimentation', { anamnese })} style={styles.grid}>
            <View style={styles.row}>
              <Image source={require('../../../assets/images/diet.png')} style={styles.image} />
              <View>
                <Text color="#2c2c2c">Alimentação</Text>
                <Text color="#2c2c2c" size="14px">{alimentation.length + ' Alimentos cadastrados'}</Text>
                <Text color="#2c2c2c" size="14px">Recomendar agora!</Text>
              </View>
            </View>
          </TouchableOpacity>

          <View style={{...styles.grid, marginBottom: 0}}>
            
          </View>

          <View style={styles.row}>
          <View style={styles.row}>
              <Image source={require('../../../assets/images/clipboard.png')} style={{...styles.image, width: 40, height: 40}} />
              <View>
                  <Text color="#2c2c2c">Recomendações</Text>
                  <Text color="#2c2c2c" size="14px">Recomendar agora!</Text>
                </View>
            </View>
            <View style={styles.inputRow}>
              <Input
                placeholder="Faça recomendações para o surdo ou para sua familia."
                onChangeText={(text) => setRecommendation(text)}
                value={recomendation}
              />
          </View>
        </View>

          <Button onPress={() => saveHandler()}>
            <Text style={{color: '#f2f2f7', fontSize: 16 }}>Salvar e Voltar</Text>
          </Button>
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scroll: {
    width: '100%',
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
  inputRow: {
    width: '92%',
    height: 150,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 20,
    marginBottom: 20,
    backgroundColor: '#f2f2f7',
    borderRadius: 30,
    borderBottomColor: '#f2f2f7',
  },
})

export default DoctorScreen;