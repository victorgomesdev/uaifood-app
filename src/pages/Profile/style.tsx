import { StyleSheet } from "react-native";
import * as env from '../../../env.json'

const style = StyleSheet.create({
    screen:{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: env.BACKGROUND
    },
    container:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: env.HIGHT_PRIORITY,
        width: '90%',
        height: '50%',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    terms:{
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
        alignSelf: 'center',
        marginTop: 30,
        
    }
})

export default style