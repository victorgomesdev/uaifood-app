import { StyleSheet, PixelRatio} from 'react-native'
import * as env from '../../../env.json'

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: env.HIGHT_PRIORITY,
        height: 40,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 24,
        paddingRight: 24
    },
    text:{
        color: '#ffffff',
        fontWeight: '600',
        fontSize: PixelRatio.getFontScale() * 15,
        textAlign: 'center'
    }
})

export default style