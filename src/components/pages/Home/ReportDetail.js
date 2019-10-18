import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import api from '../../../server/api'

export function reportDetailNavigation() {
  return {
    title: 'Detalhe da Queixa',
    headerTitleStyle: {
      color: '#f2f2f7'
    },
    headerStyle: {
      backgroundColor: '#216583',
    },
    headerTintColor: '#f2f2f7',
  }
}

export default function ReportDetail(props) {
  const [alimentation, setAlimentation] = useState([])
  const [drugs, setDrugs] = useState([])
  const [anamnese, setAnamnese] = useState({queixas: [], localizacao: []})

  useEffect(() => {
    getAnamnese()
    getAlimentation()
    getDrugs()
  }, [])

  async function getAnamnese(){
    try {
      const anamneseId = props.navigation.getParam('anamneseId')
      const response = await api.get(`/anamnese/${anamneseId}`)
      console.log('anamnese', response.data)
      setAnamnese(response.data)
    } catch(error) {
      console.log(error.response.data)
    }
  }

  async function getAlimentation(){
    try {
      const anamneseId = props.navigation.getParam('anamneseId')
      console.log(anamneseId)
      const alimentation = await api.get(`/alimentation/${anamneseId}`)
      setAlimentation(alimentation)
    } catch(error) {
      console.log(error.response.data)
    }
  }

  async function getDrugs(){
    try {
      const anamneseId = props.navigation.getParam('anamneseId')
      const drugs = await api.get(`/drugs/${anamneseId}`)
      getDrugs(drugs)
    } catch(error) {
      console.log(error.response.data)
    }
  }

  return (
    <View style={styles.wrapper}>

      <View style={styles.row}>
        <Text style={{...styles.text, fontSize: 22}}>
          Informações do Pasciente
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          Queixas: { anamnese.queixas.join(' ')  || "Queixas não cadastradas"}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          Duração: { anamnese.duracao } Dias
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          Frequencia: { anamnese.duracao } em { anamnese.duracao } Dias
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.text}>
          Localização: { anamnese.localizacao.join(' e ') }
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={{...styles.text, fontSize: 22}}>
          Informações do Médico
        </Text>
      </View>

      <Text style={styles.title}>
        Remédios
      </Text>


      <Text style={styles.title}>
        Alimentação
      </Text>

      <Text style={styles.title}>
        Recomendação
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20
  },
  text: {
    fontSize: 16,
    color: '#2c2c2c',
    fontWeight: '800'
  },
  row: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
    flexWrap: 'wrap',
  },
})
