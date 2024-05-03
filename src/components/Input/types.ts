export default interface InputProps {
    placeholder: string,
    width: number,
    onFocusHandler?: () => void,
    onChangeHandler: (text: string) => void,
    onBlurHandler: () => void,
    onErrorHandler?: (value: string) => void
}