import React, { Component, Fragment } from 'react'
import { Image } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { Formik } from 'formik';
import * as yup from 'yup';

import { 
  Button, Input, Text, Row, RowInput, Wrapper, 
} from './AuthStyle'

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather'

import Server from '../Server';

// Esquema de validação definido com mensagens
const SignInSchemma = yup.object().shape({
  email: yup.string()
    .email('Parece que esse email não é válido, tente outro!')
    .required('O preenchimento do campo email é obrigatório.'),
  password: yup.string()
    .required('A senha deve ser inserida.')
})

class SignInScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      header: null
    };

    state = {
      email: '',
      password: ''
    }
  
    render() {
      return (
        <Wrapper>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => this._signInAsync(values)}
            validationSchema={SignInSchemma}
          >
            {({ handleSubmit, handleBlur, handleChange, values, errors, touched}) => (
              <LinearGradient colors={['#216583', '#217e83']} angle={-225}  style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/images/Home/logo.png')} style={{ resizeMode: 'contain', width: 200, height: 200, elevation: 4, }} />

                <RowInput>
                  <Icon name="mail" size={24} color="#BDBDBD" />
                  <Input
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="sos@libras.com.br"
                  />
                </RowInput>

                <Row>
                  { errors.email && touched.email && (
                    <Text color="#e74c3c">{errors.email}</Text>
                  )}
                </Row>
              
                <RowInput>
                  <Icon name="key" size={24} color="#BDBDBD" />
                  <Input
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                    returnKeyType="send"
                    placeholder="********"
                    onSubmitEditing={handleSubmit}
                  />
                </RowInput>

                <Row>
                  { errors.password && touched.password && (
                    <Text color="#e74c3c">{errors.password}</Text>
                  )}
                </Row>
                

                <Row>
                  <Button onPress={handleSubmit}>
                    <Text color="#f2f2f7">Finalizar Cadastro</Text>
                  </Button>
                </Row>
              </LinearGradient>
            )}
          </Formik>
        </Wrapper>
      );
    }

    goTo(route = "") {
      this.props.navigation.navigate(route)
    }
  
    _signInAsync = async (values) => {
      // await AsyncStorage.setItem('userToken', 'abc');
      // this.props.navigation.navigate('App');

      try {
        // const response = await Server.post('/login', values, "")
        // const token = response.data.token;
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
      } catch(error) {
        console.log(error)
      }
    };
}

export default SignInScreen;