import React, { Component, Fragment } from 'react'
import { Image, TouchableHighlight } from 'react-native'

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

      this.password = React.createRef()
    }

    static navigationOptions = {
      header: null
    };

    state = {
      email: '',
      password: ''
    }

    signIn = async (values) => {
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

    goTo(route = '', params = {}) {
      this.props.navigation.navigate(route, params)
    }
  
    render() {
      return (
        <Wrapper>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => this.signIn(values)}
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
                    onEndEditing={() => this.password.focus()}
                    returnKeyType="next"
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
                    ref={password => this.password = password}
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
                    <Text color="#f2f2f7">Entrar</Text>
                  </Button>
                </Row>

                <Row>
                  <TouchableHighlight onPress={() => this.goTo('Reset')}>
                    <Text color="#f2f2f7">Esqueci minha senha</Text>
                  </TouchableHighlight>
                </Row>

                <Row style={{ marginTop: 40 }}>
                  <Button onPress={() => this.goTo('Register')} transparent="transparent" outlined="#f2f2f7" border="1px">
                    <Text color="#f2f2f7">Cadastre-se</Text>
                  </Button>
                </Row>
              </LinearGradient>
            )}
          </Formik>
        </Wrapper>
      );
    }
}

export default SignInScreen;