import { createContext, useState } from "react"
import { Alert } from "react-native"
import * as env from '../../../env.json'
import { useNavigation } from "@react-navigation/native"

export const AuthContext = createContext({})

export function AuthProvider({ children }: any) {
    const navigation = useNavigation()
    const [user, setUser] = useState({})
    return (
        <AuthContext.Provider value={{ authentication, user }}>
            {children}
        </AuthContext.Provider>
    )
    interface UserData {
        id: number,
        email: string,
        password: string,
        name: string,
        slug: string,
        token: string
    }

    async function authentication({ email, password }: any) {

        fetch(`${env.BACKEND_URL}/user/login`, {
            method: 'post',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ email, password })
        }).then(async (res) => {
            const data = await res.json()

            if (res.status != 200) {
                Alert.alert('Erro', 'Credencias inválidas.')
                console.log(data)
            } else {

                setUser(data)
                navigation.reset({ index: 0, routes: [{ name: 'Home' as never }] })
            }
        }).catch(err => {
            Alert.alert('Erro', 'Um erro inesperado aconteceu, verifique sua conexaõa coma internet.')
            console.log(err)
        })
    }
}

export function createAccount(params: any) {

    let data
    fetch(env.BACKEND_URL + '/user/create', {
        method: 'post',
        headers:{
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(params)
    }).then(async r=>{

        if(!r.ok){
            Alert.alert('Erro', 'Verifique os dados inseridos')
        }else{
            const user = await r.json()
            data = user
            
        }
    })
}