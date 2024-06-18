import { StyleSheet } from "react-native";
import * as env from '../../../env.json'

const style = StyleSheet.create({
    fab:{
        backgroundColor: env.HIGHT_PRIORITY,
        width: 110,
        height: 70,
        borderRadius: 15,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        right: 20
    }
})

export default style