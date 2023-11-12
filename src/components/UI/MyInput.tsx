import { ChangeEvent, FC } from 'react'
import s from './../../style/MyInput.module.scss'


interface MyInputPropsType {
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
	value?: string,
	type?: string
	placeholder?: string,
	onChange2?: () => void,

}

const MyInput: FC<MyInputPropsType> = ({ ...props }) => {
	return (
		<input className={s.myInput} {...props} />
	)
}

export default MyInput