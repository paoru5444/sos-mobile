// Listagem de relatórios e criação de queixa

import React, { Fragment ,useState, useEffect, } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { useNavigation } from 'react-navigation-hooks';
import { withNavigation } from 'react-navigation'

import api from '../../../server/api'

import LinearGradient from 'react-native-linear-gradient'

import styled from 'styled-components/native'

const Wrapper = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '15%'
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

import { Fab } from '../../common/Fab'
import { Button } from '../../common/Button'
import { ReportCard } from '../../common/Card'

function Reports() {
  const [reports, setReport] = useState([])

  useEffect(() => {
    (async () => {
      const anamnese = await api.get('/anamnese')
      setReport(anamnese.data)
    })()
  }, [])

  const { navigate } = useNavigation()

  return (
    <LinearGradient colors={['#216583', '#217e83']} style={styles.wrapper}>
      { reports ? (
        <View style={styles.cardView}>
          <ReportCard>
            <Text>Queixa</Text>
          </ReportCard>
          <Fab onPress={() => navigate('Deaf')}>
            <Text style={styles.buttonText}>+</Text>
          </Fab>
        </View>
      ) : (
        <View style={styles.cardView}>
          <ReportCard>
            <Text>Queixa</Text>
          </ReportCard>
          <Fab onPress={() => navigate('Deaf')}>
            <Text style={styles.buttonText}>+</Text>
          </Fab>
        </View>
      )}
    </LinearGradient>
  );
}

export default withNavigation(Reports)