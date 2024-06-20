import { createContext } from "react"
import { Alert } from "react-native"
import * as env from '../../../env.json'

export const AuthContext = createContext(null)

interface UserData{
    id: number,
    email: string,
    password: string,
    name: string,
    slug: string,
    token: string
}

export async function authentication({ email, password }: any): Promise<UserData> {

    return fetch(`${env.BACKEND_URL}/user/login`, {
        method: 'post',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ email, password })
    }).then(async (res) => {
        const data = await res.json()

        if (res.status !== 200) {
            Alert.alert('Erro', 'Credencias inválidas.')
            console.log(data)
        }
        return data
    }).catch(err => {
        Alert.alert('Erro', 'Um erro inesperado aconteceu, verifique sua conexaõa coma internet.')
        console.log(err)
    })
}