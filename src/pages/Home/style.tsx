import {StyleSheet} from 'react-native'
import * as env from '../../../env.json'

const style = StyleSheet.create({

    screen:{
        flex: 1,
        backgroundColor: env.BACKGROUND,
        paddingTop: 25,
        paddingLeft: 15,
        paddingRight: 15
    }
})

export default style