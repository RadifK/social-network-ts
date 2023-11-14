import s from './FriendsBlock.module.scss'
import FriendItem from './FriendsItem/PageFriendItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'


const FriendsBlock = () => {

	const friends = useSelector((state: RootState) => state.friends)

	return (
		<div className={s.friendsBlock}>
			<div className={s.friendsOnline}>
				<p className={s.blockName}>Friends Online</p>
				<div className={s.friendsItems}>
					{friends.filter(friend => friend.online).slice(0, 4).map(friend => <FriendItem online={friend.online} name={friend.name} avaSrc={friend.avatar} />)}
				</div>
			</div>
			<div className={s.friends}>
				<p className={s.blockName}>Friends </p>
				<div className={s.friendsItems}>
					{friends.slice(0, 4).map(friend => <FriendItem online={friend.online} name={friend.name} avaSrc={friend.avatar} />)}
				</div>
			</div>
		</div>
	)
}

export default FriendsBlock