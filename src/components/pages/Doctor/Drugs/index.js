import React, { useState, useEffect, useRef } from 'react';
import { Image, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';


import Feather from 'react-native-vector-icons/Feather'

import { Input } from '../../Auth/AuthStyle'

import { Button } from '../../Home/HomeStyle'

import api from '../../../../server/api'

import { DotIndicator } from 'react-native-indicators'

export function drugsOptions({ navigate }) {
  return {
    title: 'Medicação',
    headerTintColor: '#f2f2f7',
      headerStyle: {
        backgroundColor: '#215583'
      },
      headerTitleStyle: {
        color: '#f2f2f7',
      },
  }
}

function Drugs(props) {

  const [anamnese, setAnamnese] = useState([])
  const [name, setName] = useState('')
  const [useMode, setUseMode] = useState('')
  const [description, setDescription] = useState('')
  const [sendLoad, setSendLoad] = useState(false)

  const useModeRef = useRef()
  const descriptionRef = useRef()

  useEffect(() => {
    setAnamnese(props.navigation.getParam('anamnese'))
  }, [])

  async function saveHandler() {
    try {
      setSendLoad(true)
      const save = await api.post('/drugs', {
        name, useMode, description, anamneseId: anamnese._id
      })

      setSendLoad(false)
      props.navigation.goBack()
    } catch(error) {
      setSendLoad(false)
      console.log(error.response)
    }
  }

  return (
    <KeyboardAvoidingView>
      <View style={styles.wrapper}>
        <View style={styles.banner}>
            <ImageBackground style={styles.imageBanner} source={require('../../../../assets/images/medicine-background.png')} />
          </View>

          <View style={styles.row}>
            <Image source={require('../../../../assets/images/medicine.png')} style={styles.image} /> 
            <Text color="#2c2c2c" size="20px">Quais remédios o pasciente{'\n'}deve comprar?</Text>
          </View>

          <View style={{...styles.row, marginBottom: 0}}>
            <Text color="#2c2c2c" size="18px" style={{ alignSelf: 'flex-start'}}>Nome do remédio</Text>
            <View style={styles.inputRow}>
              <Input
                placeholder="ex: Loratadina"
                onChangeText={(text) => setName(text)}
                value={name}
                returnKeyType="next"
                onEndEditing={() => useModeRef.current.focus()}
              />
            </View>
          </View>

          <View style={{...styles.row, marginBottom: 0}}>
            <Text color="#2c2c2c" size="18px" style={{ alignSelf: 'flex-start'}}>Modo de uso do remédio</Text> 
            <View style={styles.inputRow}>
              <Input
                placeholder="ex: Uso oral"
                onChangeText={(text) => setUseMode(text)}
                value={useMode}
                returnKeyType="next"
                onEndEditing={() => descriptionRef.current.focus()}
                ref={ref => useModeRef.current = ref}
              />
            </View>
          </View>

          <View style={{...styles.row, marginBottom: 0}}>
            <Text color="#2c2c2c" size="18px" style={{ alignSelf: 'flex-start'}}>Descrição do remédio</Text>
            <View style={styles.inputRow}>
              <Input
                placeholder="ex: Analgesico para febre"
                onChangeText={(text) => setDescription(text)}
                value={description}
                returnKeyType="send"
                onEndEditing={() => saveHandler()}
                ref={ref => descriptionRef.current = ref}
              />
            </View>
          </View>

          <View style={{...styles.row, width: '80%', alignItems: 'center', flexDirection: 'column'}}>
            <Button onPress={() => saveHandler()}>
              { sendLoad ? (
                <DotIndicator count={3} color='white' size={8} />
              ) : (
                <Text style={{color: '#f2f2f7', fontSize: 16 }}>Salvar Medicamento</Text>
              )}
            </Button>
          </View>
      </View>
    </KeyboardAvoidingView>
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
  banner: {
    width: '100%',
    height: '20%',
    backgroundColor: "#215583",
    padding: 0,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  imageBanner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  inputRow: {
    width: '90%',
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

export default Drugs;