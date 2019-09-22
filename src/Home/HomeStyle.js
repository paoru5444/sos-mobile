import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

export const Wrapper = styled.View`
  width: 100%;
  height: 85%;
  background-color: #f2f2f7;
  align-items: center;
  justify-content: ${ props => props.justify || 'flex-start'};
`

export const Footer = styled.View`
  width: 100%;
  height: 15%;
  background-color: #f2f2f7;
  align-items: center;
  justify-content: center;
`

export const Button = styled.TouchableHighlight`
  width: ${ props => props.width|| '80%'};
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color:${props => props.transparent || '#216583'};
  border-color: ${props => props.outlined || 'transparent'}
  border-width: ${props => props.border || 0}
  border-radius: 30px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  elevation: 1;
`

export const Card = styled.TouchableHighlight`
  width: ${ width * (95 / 100) };
  height: ${ height * (15 / 100) };
  background-color: #00818a;
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
  color:${props => props.color || "#2c2c2c"};
  font-size: ${props => props.size || '16px'};
  align-self: center;
`

export const TextInput = styled.TextInput`
  border: #333 0.5px solid;
  border-radius: 10px;
  width: ${ width - 50};
  flex-wrap: wrap;
`

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: ${ props => props.justify || 'center'};
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
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

export const CardQueixa = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 60px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  elevation: 1;
`

export const Chip = styled.TouchableHighlight`
  width: auto;
  height: auto;
  border-radius: 25px;
  background-color: ${props => props.color || 'orange'}
  padding: 15px;
  margin: 5px;
`