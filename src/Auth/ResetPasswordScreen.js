import React, { Component } from 'react'
import { View, Button, Dimensions, TouchableHighlight } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { Formik } from 'formik';
import * as yup from 'yup';


import styled from 'styled-components/native'

const { width, height } = Dimensions.get('screen')

// Componentes próprios baseados nos componentes react.
const Text = styled.Text`
  font-size: 16px;
  color: #333;
  align-self: flex-start;
  color: ${props => props.color || "#333"}
`

const ButtonField = styled.View`
  width: ${width - 100};
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`

const SignInField = styled.KeyboardAvoidingView`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: ${width -100};
  padding-top: 150px;
`
const TextInput = styled.TextInput`
  width: ${width - 100};
  height: 45px;
  border-color: #707070;
  border-width: 0.5px;
  border-radius: 5px;
  margin-top: 10px;
`

// Esquema de validação definido com mensagens
const ResetPasswordShemma = yup.object().shape({
  email: yup.string()
    .email('Parece que esse email não é válido, tente outro!')
    .required('O preenchimento do campo email é obrigatório.')
})

class ResetPasswordScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      header: null
    };


    goTo(route = "") {
        this.props.navigation.navigate(route)
    }

    resetAsync = async (values) => {
        console.warn('values', values)
        // await AsyncStorage.setItem('userToken', 'abc');
        // this.props.navigation.navigate('App');
    };

    render() {
      return (
        // Framework para criação e gerenciamento de formulários
        <Formik
          initialValues={{ email: '' }}
          onSubmit={values => this.resetAsync(values)}
          validationSchema={ResetPasswordShemma}
        >
          {({ handleSubmit, handleBlur, handleChange, values, errors, touched}) => (
            <SignInField behavior="padding" enabled>
              <Text>Digite seu email para sabermos que é você.</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="meuemail@gmail.com"
              />
              { errors.email && touched.email && (
                <Text color="#e74c3c">{errors.email}</Text>
              )}

              <ButtonField>
                <Button
                  color="#27ae60"
                  title="Enviar email"
                  accessibilityLabel="Solicitar troca de email"
                  onPress={handleSubmit}
                />
              </ButtonField>
            </SignInField>
          )}
        </Formik>
      );
    }
}

export default ResetPasswordScreen;