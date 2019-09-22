import React, { Fragment } from 'react'
import { 
  TouchableOpacity, ScrollView, View,
} from 'react-native'

import {
  Button, Footer, Text, Wrapper, Queixas, CardQueixa, Chip, Row
} from '../HomeStyle'

import {
  RowInput, Input,
} from '../../Auth/AuthStyle'

import Icon from 'react-native-vector-icons/Feather'
import IconMCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

// const colors = ['#447260', '#427676', '#84BFA8', '#3F9A82']
const colors = ['#f7be16']

const QueixaComponent = ({ next, queixas, getQueixaInput, adicionarQueixa, goTo }) => (
    <Fragment>
        <Wrapper>
          <Row>
            <Text>Atendimento Rápido</Text>
            <IconMCommunity name="truck-fast" size={24} color="#293462" />
          </Row>
          <Row>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <CardQueixa onPress={() => goTo('Detalhes')}>
                    <Text>teste</Text>
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>

                <View style={{ width: 5 }} />
                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>
                <View style={{ width: 5 }} />

                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>
                <View style={{ width: 5 }} />

                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>
                <View style={{ width: 5 }} />

                <CardQueixa>
                    <Text>teste</Text>
                </CardQueixa>
                <View style={{ width: 5 }} />
            </ScrollView>
          </Row>

          <RowInput>
            <Icon name="frown" size={24} color="#BDBDBD" />
            <Input placeholder="O que sentir para vir aqui?" onChangeText={(text) => getQueixaInput(text)} />
          </RowInput>

            <Row>
              <Button width="85%" onPress={() => adicionarQueixa()} transparent="transparent" outlined="#216583" border="1px">
                <Row>
                  <Text color="#216583">Adicionar Queixa</Text>
                  <Icon name="plus" size={26} color="#00818a" />
                </Row>
              </Button>
            </Row>

            <Queixas>
              <ScrollView style={{ maxHeight: 250, }}>
                  <Row>
                  {queixas.map((queixa, index) => (
                    <Chip key={index} color={colors[Math.floor(Math.random() * 3)]}>
                      <>
                      {/* <Icon name="chevron-right" size={22} /> */}
                      <Text size="18px" color="#f2f2f2">{queixa}</Text>
                      </>
                    </Chip>
                  ))}
                  </Row>
              </ScrollView>
            </Queixas>     
        </Wrapper>
        
        <Footer>
            <Button onPress={() => next()}>
                <Text color="#f2f2f7">Historia da Doença</Text>
            </Button>
        </Footer>
    </Fragment>
);

export default QueixaComponent;