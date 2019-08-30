import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const instance = async () => {
    const token = await AsyncStorage.getItem('userToken') 
    axios.create({
        baseURL: 'https://homolog-api.fiscalizaja.com.br/api/v1',
        timeout: 1000,
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
}

const server = {
    get: async (route, token) => {
        try {
            const response = await instance.get(route, {
                headers: { "Autentication": "Bearer " + token }
            })
            return response.json()
        } catch (error) {
            console.log(error)
        }
    },
    post: async (route, params) => {
        console.warn(params)
        try {
            const response = await instance.post(route, params)
            console.log('response', response)
            return response;
        } catch (error) {
            console.warn(error)
        }
    }

    // A requisição asyncorona está barrando a chamada da 
    // função de post, corrigir isso amanhã para gerar 
    // instancias dinamicamente.
}

export default server;