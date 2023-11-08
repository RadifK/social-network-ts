import s from '../style/FriendsBlock.module.scss'

const FriendsBlock = () => {
	return (
		<div className={s.friendsBlock}>
			<div className={s.friendsOnline}>Friends Online</div>
			<div className={s.friends}>Friends</div>
		</div>
	)
}

export default FriendsBlock