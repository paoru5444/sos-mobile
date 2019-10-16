import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import api from '../../../server/api'

export default function ReportDetail(props) {
  const [alimentation, setAlimentation] = useState([])
  const [drugs, setDrugs] = useState([])

  useEffect(() => {
    getAlimentation()
    getDrugs()
  }, [])

  async function getAlimentation(){
    try {
      const anamneseId = props.navigation.getParam('anamneseId')
      const alimentation = await api.get(`/alimentation/${anamneseId}`)
      setAlimentation(alimentation)
    } catch(error) {
      console.log(error.response)
    }
  }

  async function getDrugs(){
    try {
      const anamneseId = props.navigation.getParam('anamneseId')
      const drugs = await api.get(`/drugs/${anamneseId}`)
      getDrugs(drugs)
    } catch(error) {
      console.log(error.response)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Anamnese
      </Text>

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
  },
  title: {
    fontSize: 20,
    color: '#2c2c2c',
    fontWeight: '800'
  }
})
