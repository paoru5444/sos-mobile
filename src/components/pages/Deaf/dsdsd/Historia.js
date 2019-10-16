import React, { Fragment } from 'react'
import {
  View, StyleSheet, Picker, Switch, ScrollView
} from 'react-native'

import {
  Button, Footer, Text, Wrapper
} from '../../Home/HomeStyle'

import Icon from 'react-native-vector-icons/Feather'
import Slider from '@react-native-community/slider';
import { useNavigation } from 'react-navigation-hooks'

import styled from 'styled-components/native'

const Row = styled.View`
  width: 80%;
  align-self: center;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  margin-bottom: 15px
`

const Historia = ({
    next, getDuracao, duracaoSlider,
    getFrequencia, frequenciaPicker,
    getIntensidade, intensidadeSlider,
    getSituacao, situacao, makeAtendence
}) => {

  const { navigate } = useNavigation()
  
  return (
    <Fragment>
      <Wrapper>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
          <Row>
            <Text>Duração: {duracaoSlider} {duracaoSlider === 1 ? 'dia' : 'dias'}</Text>
          </Row>

          <Row>
            <Slider
              style={{width: '100%', height: 40}}
              minimumValue={1}
              maximumValue={30}
              minimumTrackTintColor="#004D40"
              maximumTrackTintColor="#000000"
              onValueChange={(value) => getDuracao(value)}
            />
          </Row>

          <Row>
            <Text>
                Intensidade: 
                { intensidadeSlider === 0 && ' Baixa' ||
                  intensidadeSlider !== 0 && intensidadeSlider !== 2 && ' Media' ||
                  intensidadeSlider === 2 && ' Alta' }
            </Text>
          </Row>

          <Row>
            <Slider
                style={{width: '100%', height: 40}}
                minimumValue={0}
                maximumValue={2}
                minimumTrackTintColor="#004D40"
                maximumTrackTintColor="#000000"
                onValueChange={(value) => getIntensidade(value)}
            />
          </Row>

          <Row>
            <Text>Frequência</Text>
          </Row>

          <Row>
            <Text>De: </Text>
            <Picker
                selectedValue={frequenciaPicker}
                style={{height: 50, width: 100}}
                onValueChange={itemValue => getFrequencia(itemValue)}
            >
                <Picker.Item label="1 hora" value={1} />
                <Picker.Item label="2 horas" value={2} />
                <Picker.Item label="3 horas" value={3} />
                <Picker.Item label="4 horas" value={4} />
            </Picker>
                
            <Text>Em: </Text>
            <Picker style={{height: 50, width: 100}} selectedValue={frequenciaPicker}>
                <Picker.Item label={frequenciaPicker + 'horas'} value={frequenciaPicker} />
            </Picker>
          </Row>                       
              
          <Row>
            <Text>Melhora, Piora</Text>
          </Row>

          <Row>
            <Icon name="frown" size={30} color="#216583" style={{ marginRight: 10 }} />

            <Switch
              onValueChange={(value) => getSituacao(value)}
              value={situacao}
            />

            <Icon name="smile" size={30} color="#216583" style={{ marginLeft: 10 }} />
          </Row>

            </ScrollView>
          </Wrapper>    

          <Footer>
              <Button onPress={() => navigate('FimQueixa')}>
                  <Text color="#f2f2f7">Finalizar Queixa</Text>
              </Button>
          </Footer>
    </Fragment>
  )
}

const styles= StyleSheet.create({
  scroll: {
    width: '100%',
    height: '100%',
    paddingTop: 50,
  }
})

export default Historia;