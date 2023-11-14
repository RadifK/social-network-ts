import { FC } from 'react'
import s from './FriendsItem.module.scss'


type TypeFriendItemProps = {
	name: string,
	avaSrc: string,
	online: Boolean
}

const FriendItem: FC<TypeFriendItemProps> = ({ name, avaSrc, online }) => {



	return (
		<div className={s.friendsItem}>
			<div className={s.avatar}>
				<img src={avaSrc} />
				{online ? <div className={s.onlineIndicator}></div> : <></>}
			</div>
			<p className={s.name}>{name}</p>
		</div>
	)
}

export default FriendItem