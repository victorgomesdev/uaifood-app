import { TouchableHighlight, Text } from 'react-native'
import CommonButtonProps from '../Button/types'
import style from './style'

export default function TextButton({ title, width, disabled = false }: CommonButtonProps) {

    return (
        <TouchableHighlight
            style={[style.buttonContainer, { width: width }]}
            disabled={disabled}
        >
            <Text style={style.text}>
                {title}
            </Text>
        </TouchableHighlight>
    )
}