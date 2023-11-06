import { FC } from 'react'
import s from './../../style/MyButton.module.scss'
import { MouseEvent } from 'react'

interface MyButtonPropsType {
	children?: string,
	onClick?: (e: MouseEvent<HTMLButtonElement>, id?: number) => void
}

const MyButton: FC<MyButtonPropsType> = ({ children, ...props }) => {
	return (
		<button {...props} className={s.myBtn}>
			{children}
		</button>
	)
}

export default MyButton