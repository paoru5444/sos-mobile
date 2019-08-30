import React, { Component, Fragment } from 'react'
import { View, Button, Dimensions, TouchableHighlight, ImageBackground } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'

import { Formik } from 'formik';
import * as yup from 'yup';

import { 
  Text, ButtonField, SignInField, TextInput
} from './AuthStyle'

import Server from '../Server';

const { width, height } = Dimensions.get('screen')


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
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => this._signInAsync(values)}
            validationSchema={SignInSchemma}
          >
            {({ handleSubmit, handleBlur, handleChange, values, errors, touched}) => (
              <SignInField behavior="padding" enabled>
                <Text>Seu Email vai aqui!</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="meuemail@gmail.com"
                />
                { errors.email && touched.email && (
                  <Text color="#e74c3c">{errors.email}</Text>
                )}

                <View style={{height: 10}}/>

                <Text>E a sua Senha aqui!</Text>
                <TextInput
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                  placeholder="**********"
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                />
                { errors.password && touched.password && (
                  <Text color="#e74c3c">{errors.password}</Text>
                )}
    
                <ButtonField>
                  <TouchableHighlight onPress={() => this.goTo('Reset')}>
                    <Text>Poxa, não lembro{'\n'}minha senha...</Text>
                  </TouchableHighlight>
    
                  <Button
                    color="#27ae60"
                    title="Entrar"
                    accessibilityLabel="Entrar no aplictivo"
                    onPress={handleSubmit}
                  />
                </ButtonField>
              </SignInField>
            )}
          </Formik>
      );
    }

    goTo(route = "") {
      this.props.navigation.navigate(route)
    }
  
    _signInAsync = async (values) => {
      // await AsyncStorage.setItem('userToken', 'abc');
      // this.props.navigation.navigate('App');

      try {
        const response = await Server.post('/login', values, "")
        const token = response.data.token;
        console.warn('token', token)
        await AsyncStorage.setItem('userToken', token);
        this.props.navigation.navigate('App');
      } catch(error) {
        console.log(error)
      }
    };
}

export default SignInScreen;