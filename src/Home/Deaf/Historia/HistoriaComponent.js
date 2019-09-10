import React, { Fragment } from 'react'
import {
  View,
} from 'react-native'

import { 
    Picker, Switch, ScrollView
} from 'react-native'

import {
  Row, Wrapper, Footer, Button, Text
} from '../../../styles'

import Icon from 'react-native-vector-icons/Feather'
import Slider from '@react-native-community/slider';

const QueixaComponent = ({
    next, getDuracao, duracaoSlider,
    getFrequencia, frequenciaPicker,
    getIntensidade, intensidadeSlider,
    getSituacao, situacao
}) => (
    <ScrollView>
        <Wrapper>
        <View style={{ height: 10, }} />
            
            <View style={{ height: 20 }} />

            <Row justify="flex-start">
                <Text size="22px">Duração: {duracaoSlider} {duracaoSlider === 1 ? 'dia' : 'dias'}</Text>
                <Slider
                    style={{width: '90%', height: 40}}
                    minimumValue={1}
                    maximumValue={30}
                    minimumTrackTintColor="#004D40"
                    maximumTrackTintColor="#000000"
                    onValueChange={(value) => getDuracao(value)}
                />
            </Row>

            <Row justify="flex-start">
                <Text size="22px">
                    Intensidade: 
                    {
                        intensidadeSlider === 0 && 'Baixa' ||
                        intensidadeSlider !== 0 && intensidadeSlider !== 2 && 'Media' ||
                        intensidadeSlider === 2 && 'Alta'}
                </Text>
                <Slider
                    style={{width: '90%', height: 40}}
                    minimumValue={0}
                    maximumValue={2}
                    minimumTrackTintColor="#004D40"
                    maximumTrackTintColor="#000000"
                    onValueChange={(value) => getIntensidade(value)}
                />
            </Row>

            <Row justify="flex-start">
                <View>
                    <Text size="22px">Frequência</Text>
                        <Row justify="flex-start">
                            <Text size="20px">De: </Text>
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
                                
                            <Text size="20px">Em: </Text>
                            <Picker style={{height: 50, width: 100}} selectedValue={frequenciaPicker}>
                                <Picker.Item label={frequenciaPicker + 'horas'} value={frequenciaPicker} />
                            </Picker>
                        </Row>
                </View>
            </Row>                            
            
            <Row justify="flex-start">
                <View>
                    <Text size="22px">Melhora, Piora</Text>
                    <Row justify="flex-start">
                        <Text size="20px" style={{ marginRight: 10 }}>
                            Não
                        </Text>

                        <Switch
                            onValueChange={(value) => getSituacao(value)}
                            value={situacao}
                        />

                        <Text size="20px" style={{ marginLeft: 10 }}>
                            Sim
                        </Text>
                    </Row>
                </View>
            </Row>

            <View style={{ width: 5, height: 10 }} />
        </Wrapper>    

        <Footer>
            <Button radius="0" width="100%" height="100%" onPress={() => next()}>
                <Text color="#f2f2f7">História patológica pregressa</Text>
            </Button>
        </Footer>
    </ScrollView>
);

export default QueixaComponent;