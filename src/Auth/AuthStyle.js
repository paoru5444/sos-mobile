import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

// Componentes próprios baseados nos componentes react.
export const Text = styled.Text`
  font-size: 16px;
  color: #333;
  align-self: flex-start;
  color: ${props => props.color || "#333"}
`

export const ButtonField = styled.View`
  width: ${width - 100};
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

export const SignInField = styled.KeyboardAvoidingView`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: ${width -100};
  padding-top: 50px;
`
export const TextInput = styled.TextInput`
  width: ${width - 100};
  height: 45px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 23px 41px rgba(0, 0, 0, 0.1);
  elevation: 5;
`