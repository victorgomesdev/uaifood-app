import { StyleSheet } from "react-native";
import * as env from '../../../env.json'

const style = StyleSheet.create({
    card:{
        width: '100%',
        marginBottom: 15,
        backgroundColor: env.SMALL_PRIORITY,
        height: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer:{
        height: '100%',
        backgroundColor: env.HIGHT_PRIORITY,
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer:{
        height: '100%',
        flex: 3,
        flexDirection: 'column',
        padding: 5,
        justifyContent: 'center'
    },
    title:{
        fontSize: 35
    },
    description:{
        fontSize: 15
    }
})
 
export default style