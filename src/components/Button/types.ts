export default interface CommonButtonProps{
    title: string,
    width: number,
    disabled: boolean
    onClickHandler?: (...params: any)=> void
}