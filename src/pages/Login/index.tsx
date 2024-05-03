import { useState } from 'react'
import { View, StatusBar, KeyboardAvoidingView, Image, Text } from 'react-native'
import style from './style'
import Input from '../../components/Input'

export default function LoginPage({ navigation }: any) {

    const [email, setEmail] = useState<string>("")
    const [passwd, setPasswd] = useState<string>("")
    
    const hadleEmailChange = (text: string)=>{

        let regex = /jhfjhfkjhfkfnkdjhf/
        if(regex.test(text)){
            setEmail(text)
        }else{

        }
    }
    return (
        <View style={style.screenContainer}>
            <KeyboardAvoidingView
                behavior='height'
            >
                <StatusBar />
                <View style={style.logoContainer}>
                    <Text style={style.logoText}>Uaifood</Text>
                </View>
                <View style={style.innerContainer}>
                    <Input
                        placeholder='Email'
                        width={200}
                        onChangeHandler={() => { }}
                    />
                    <Input
                        placeholder='Senha'
                        width={180}
                        onChangeHandler={() => { }}
                    />
                </View>

            </KeyboardAvoidingView>
        </View>

    )
}