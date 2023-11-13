import React, { FC } from 'react'
import s from './FriendsItem.module.scss'


type TypeFriendItemProps = {
	name: string,
}

const FriendItem: FC<TypeFriendItemProps> = ({ name }) => {
	return (
		<div className={s.friendsItem}>
			<div className={s.avatar}></div>
			<p className={s.name}>{name}</p>
		</div>
	)
}

export default FriendItem