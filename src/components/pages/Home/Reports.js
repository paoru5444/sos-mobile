// Listagem de relatórios e criação de queixa

import React, { useState, useEffect, } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { useNavigation } from 'react-navigation-hooks';
import { withNavigation } from 'react-navigation'

import api from '../../../server/api'

import LinearGradient from 'react-native-linear-gradient'

import { Fab } from '../../common/Fab'
import { Button } from '../../common/Button'
import { ReportCard } from '../../common/Card'

export function reportsNavigation({ navigate }) {
  return {
    title: 'Registros Cadastrados',
    headerTransparent: true,
    headerTitleStyle: {
      color: '#f2f2f7'
    },
    headerTintColor: '#f2f2f7',
  }
}

function Reports() {
  const [reports, setReport] = useState([])

  useEffect(() => {
    (async () => {
      const anamnese = await api.get('/anamnese/show')
      setReport(anamnese.data)
    })()
  }, [])

  const { navigate } = useNavigation()

  return (
    <LinearGradient colors={['#216583', '#217e83']} style={styles.wrapper}>
      { reports ? (
        <View style={styles.cardView}>
          { reports.map((report, index) => (
            <ReportCard key={index} onPress={() => navigate('ReportDetail', { anamneseId: report._id })}>
              <Text>Queixa(as)</Text>
              <Text>{report.queixa.join('')}</Text>
            </ReportCard>
          ))}

          <Fab onPress={() => navigate('Deaf')}>
            <Text style={styles.buttonText}>+</Text>
          </Fab>
        </View>
      ) : (
        <TouchableOpacity onPress={() => navigate('Deaf')} style={styles.view}>
          <Image source={require('../../../assets/images/no-complains.png')} style={styles.image} />
          <Button>
            <Text style={styles.buttonText}>Cadastrar Queixa</Text>
          </Button>
        </TouchableOpacity>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    paddingTop: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  fab: {
    shadowColor: 'red',
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0}
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain'
  },
  view: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardView: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
    color: '#f2f2f7'
  },
  buttonText: {
    color: '#f2f2f7'
  },
})

export default withNavigation(Reports)