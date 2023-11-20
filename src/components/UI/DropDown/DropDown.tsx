import { FC, ReactNode, useState } from 'react'
import s from './DropDown.module.scss'

type TypeDropDownProps = {
	children?: ReactNode
}

const DropDown: FC<TypeDropDownProps> = ({ children }) => {

	const [showToolTip, setShowToolTip] = useState(false)

	const onMouseEnterHandler = () => {
		setShowToolTip(true);
		console.log('active')
	};

	const onMouseLeaveHandler = () => {
		setShowToolTip(false);
	};

	console.log(children)

	return (
		<div className={s.toolTipBlock} onMouseLeave={onMouseLeaveHandler}>
			<div className={showToolTip ? `${s.toolTip} ${s.visible}` : s.toolTip}>

				<div className={s.toolTipItem} onClick={onMouseLeaveHandler}>{children}</div>
			</div>
			<div className={s.actions}
				onMouseEnter={onMouseEnterHandler}>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div >
	)
}

export default DropDown