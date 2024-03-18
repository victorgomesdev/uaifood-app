import { TouchableOpacity, Text } from 'react-native'
import style from './style'
import CommonButtonProps from './types'

export default function CommonButton({ title, width, onClickHandler, disabled = false }: CommonButtonProps) {
    return (
        <TouchableOpacity
            style={[style.buttonContainer, { width: width }]}
            activeOpacity={0.75}
            disabled={disabled}>
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}