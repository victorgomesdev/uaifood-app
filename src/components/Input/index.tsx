import { TextInput } from 'react-native'
import style from './style'
import * as env from '../../../env.json'
import InputProps from './types'

export default function Input({ placeholder, width, onChangeHandler, onBlurHandler, onErrorHandler, onFocusHandler }: InputProps) {
    return (
        <TextInput
            style={[style.input, { width: width }]}
            placeholder={placeholder}
            blurOnSubmit={true}
            placeholderTextColor={env.HIGHT_PRIORITY}
            cursorColor={env.SMALL_PRIORITY}
            onChangeText={(text) => onChangeHandler(text)}
            onFocus={() => onFocusHandler}
            onBlur={() => onBlurHandler}
            
        />
    )
}