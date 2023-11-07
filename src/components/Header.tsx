import { FC } from 'react'
import s from '../style/Header.module.scss'
import logo from './../img/svg/typescript-icon-round.svg'

const Header: FC = () => {
	return (
		<header className={s.header}>
			<div className={`${s.content} _container`}>
				<div className={s.logo}>
					<img src={logo} alt="" />
				</div>
			</div>
		</header>
	)
}

export default Header