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

import api from '../server/api';

// Esquema de validação definido com mensagens
const SignInSchemma = yup.object().shape({
  name: yup.string()
    .required('Campo Obrigatório.'),
  email: yup.string()
    .email('Parece que esse email não é válido, tente outro!')
    .required('O preenchimento do campo email é obrigatório.'),
  password: yup.string()
    .required('A senha deve ser inserida.')
})

class RegisterScreen extends Component {
    constructor(props)  {
      super(props)
    }

    static navigationOptions = {
      header: null
    };

    state = {
      name: '',
      email: '',
      password: ''
    }

    goTo(route = "") {
      this.props.navigation.navigate(route)
    }
  
    register = async (values) => {
      try {
        const response = await api.post('/register', values)

        const token = response.data.token;

        await AsyncStorage.setItem('userToken', token);

        this.props.navigation.navigate('App');
      } catch(error) {
        console.log(error)
      }
    };
  
    render() {
      return (
        <Wrapper>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            onSubmit={values => this.register(values)}
            validationSchema={SignInSchemma}
          >
            {({ handleSubmit, handleBlur, handleChange, values, errors, touched}) => (
              <LinearGradient colors={['#216583', '#217e83']} angle={-225}  style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../assets/images/Home/logo.png')} style={{ resizeMode: 'contain', width: 200, height: 200, elevation: 4, }} />

                <Row>
                  { errors.name && touched.name && (
                    <Text color="#e74c3c">{errors.name}</Text>
                  )}
                </Row>

                <RowInput>
                  <Icon name="user" size={24} color="#BDBDBD" />
                  <Input
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="seu nome"
                  />
                </RowInput>

                <Row>
                  { errors.email && touched.email && (
                    <Text color="#e74c3c">{errors.email}</Text>
                  )}
                </Row>

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
                  { errors.password && touched.password && (
                    <Text color="#e74c3c">{errors.password}</Text>
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
}

export default RegisterScreen;