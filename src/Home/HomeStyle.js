import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

export const Wrapper = styled.View`
  width: ${ width };
  height: ${ height * (80 / 100) };
  background-color: #fff;
  align-items: center;
  justify-content: center;
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
  color:${props => props.color || "#333"}
`