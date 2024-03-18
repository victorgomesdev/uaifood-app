import { PixelRatio, StyleSheet } from "react-native";
import * as env from '../../../env.json'

const style = StyleSheet.create({
    input: {
        backgroundColor: '#f1fdf2',
        height: PixelRatio.get() * 30,
        borderColor: env.SMALL_PRIORITY,
        borderWidth: PixelRatio.get() * 1,
        padding: 10,
        margin: 10,
        borderRadius: 5,
        color: env.HIGHT_PRIORITY
    }
})

export default style