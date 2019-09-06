import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

export const Wrapper = styled.View`
  width: ${ width };
  height: ${ height * (80 / 100) };
  background-color: #fff;
  align-items: center;
  justify-content: flex-start;
`

export const Card = styled.TouchableHighlight`
  width: ${ width * (95 / 100) };
  height: ${ height * (15 / 100) };
  background-color: #2980b9;
  flex-wrap: wrap;
`
export const CardImage = styled.View`
  width: ${ width * (30 / 100) };
  height: ${ height * (15 / 100) };
  background-color: #eee;
`


export const CardRow = styled.View`
  width: ${ width * (65 / 100) };
  height: ${ height * (15 / 100) };
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 0 5px 0 5px;
`

export const Text = styled.Text`
  color:${props => props.color || "#333"};
  font-size: ${props => props.size || '16px'};
  align-self: flex-start;
`

export const TextInput = styled.TextInput`
  border: #333 0.5px solid;
  border-radius: 10px;
  width: ${ width - 50};
  flex-wrap: wrap;
`

export const Row = styled.View`
  flex-direction: row;
  alignItems: center;
  flex-wrap: wrap;
`

export const Queixas = styled.View`
  flex-direction: row;
  alignItems: center;
  width: ${ width };
`
export const QueixaField = styled.View`
  width: ${ width };
  height: ${ height * (80 / 100) };
  background-color: #fff;
  align-items: flex-start;
  justify-content: flex-start;
`

export const CardQueixa = styled.View`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: 50px;
`

export const Chip = styled.TouchableHighlight`
  width: auto;
  height: auto;
  border-radius: 25px;
  background-color: ${props => props.color || 'orange'}
  padding: 15px;
  margin: 5px;
`