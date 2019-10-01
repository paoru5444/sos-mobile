import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-width: 0;
  border-radius: 30px;
  background-color: ${props => props.background || '#f2f2f7'};
  align-items: center;
  justify-content: center;
  elevation: 2;
`

export const ButtonOutlined = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border: 0;
  border-radius: 30px;
  background-color: transparent;
  border: 0.5px solid #f2f2f7;
  align-items: center;
  justify-content: center;
  elevation: 2;
`