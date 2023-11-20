import { ChangeEvent, FC } from 'react'
import s from './MyTextArea.module.scss'

type TypeMyTextAreaProps = {

	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void,
	value?: string,
	placeholder?: string,
}

const MyTextArea: FC<TypeMyTextAreaProps> = ({ ...props }) => {
	return (
		<textarea className={s.myTextArea} {...props} />

	)
}

export default MyTextArea