import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

export const Wrapper = styled.View`
  width: ${ width };
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export const Row = styled.View`
  flex-direction: row;
  alignItems: center;
  justify-content: ${props => props.justify || 'center'};
  flex-wrap: wrap;
  width: ${width - 50};
  height: auto;
`

export const Button = styled.TouchableOpacity`
  width: ${ props =>  props.width || '100px'};
  height: ${ props =>  props.height || '45px'};;
  background-color: #024;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 10px;
`

export const Text = styled.Text`
  color:${props => props.color || "#333"};
  font-size: ${props => props.size || '16px'};
`
