import {Alert} from 'react-native'
export function cadastrar(){
    
}

export async function listDevices(ownerid: string, token: string){
    try{
        const result = await fetch('http://31.220.81.141:3000', {
            method: 'post',
            headers:{
                'Content-Type':'application/json' 
            },
            body: JSON.stringfy({
                token: token,
                ownerId: ownerId
            })
        })

        const devices = await result.json()
        return devices
    }catch(e){
        Alert.alert('Erro', 'Verifique a sua conexão com a internet')
    }
}
