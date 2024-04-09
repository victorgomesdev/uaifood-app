import { View, StyleSheet } from "react-native";
import * as env from '../../../env.json'

export default function Profile(){
    return(
        <View style={style.profile}>
            VG
        </View>
    )
}

const style = StyleSheet.create({
    profile:{
        width: 20,
        height: 20,
        borderRadius: 5,
        backgroundColor: env.SMALL_PRIORITY
    }
})