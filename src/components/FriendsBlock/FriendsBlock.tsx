import s from './FriendsBlock.module.scss'
import FriendItem from './FriendsItem/FriendItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'


const FriendsBlock = () => {

	const friends = useSelector((state: RootState) => state.friends)

	return (
		<div className={s.friendsBlock}>
			<div className={s.friendsOnline}>
				<p className={s.blockName}>Friends Online</p>
				<div className={s.friendsItems}>
					{friends.map(friend => <FriendItem name={friend.name} />)}
				</div>
			</div>
			<div className={s.friends}>
				<p className={s.blockName}>Friends </p>
				<div className={s.friendsItems}>
					{friends.map(friend => <FriendItem name={friend.name} />)}
				</div>
			</div>
		</div>
	)
}

export default FriendsBlock