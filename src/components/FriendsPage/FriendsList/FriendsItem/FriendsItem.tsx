import { FC } from 'react'
import s from './FriendsItem.module.scss'
import DropDown from '../../../UI/DropDown/DropDown'

type TypeFriendsItemProps = {
	name: string,
	surname: string,
	key: number,
	avaSrc: string,
	online: Boolean
}

const FriendsItem: FC<TypeFriendsItemProps> = ({ name, surname, avaSrc, online }) => {



	return (
		<div className={s.friendsItem}>
			<div className={s.ava}>
				<img src={avaSrc} alt="ava" />
				{online ? <div className={s.onlineIndicator}></div> : <></>}
			</div>
			<div className={s.name}> {`${name} ${surname}`} </div>
			<DropDown >
				<div>
					delete
				</div>
			</DropDown >
		</div>

	)
}

export default FriendsItem