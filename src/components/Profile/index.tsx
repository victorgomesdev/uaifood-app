import { StyleSheet, Text, TouchableOpacity } from "react-native";
import * as env from '../../../env.json'

export default function Profile({name, navigation}: {name: string, navigation: any}){
    return(
        <TouchableOpacity 
        style={style.profile}
        activeOpacity={0.75}
        onPress={()=> navigation.navigate("Profile")}>
            <Text
            style={{textAlign: 'center',
            fontSize: 20,
            color: env.HIGHT_PRIORITY,
            fontWeight: "500"}}>{name}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    profile:{
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: env.SMALL_PRIORITY,
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    }
})