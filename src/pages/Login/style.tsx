import { StyleSheet } from "react-native";
import * as env from '../../../env.json'

const style = StyleSheet.create({
    screenContainer:{
        width: '100%',
        height: '100%',
        backgroundColor: env.BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerContainer:{
        width: '80%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoText:{
        fontWeight: '500',
        fontSize: 10
    }
})

export default style