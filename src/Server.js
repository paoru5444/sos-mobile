import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://homolog-api.fiscalizaja.com.br/api/v1',
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
    }
})

const server = {
    get: async (route, token) => {
        try {
            return await instance.get(route, {
                headers: { "Autentication": "Bearer " + token }
            })
        } catch (error) {
            console.log(error)
        }
    },
    post: async (route, params) => {
        console.warn(params)
        try {
            return await instance.post(route, params)
        } catch (error) {
            console.log(error)
        }
    }
}

export default server;