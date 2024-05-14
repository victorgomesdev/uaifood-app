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
        justifyContent: 'space-around',
        
    },
    title:{
        fontSize: 25,
    },
    description:{
        fontSize: 15
    },
    nameContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 5,
        alignItems: 'center',
        flex: 3
    },
    descContainer:{
        paddingLeft: 10,
        paddingRight: 5,
        flex: 3,
        display: 'flex',
        justifyContent: 'center'
    },
    image:{
        height: 140,
        width: 140
    }
})
 
export default style