import s from './FriendsList.module.scss'
import FriendsItem from './FriendsItem/FriendsItem'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import SortFriends from './SortFriends/SortFriends'
import SearchFriends from './SearchFriends/SearchFriends'
import { FC } from 'react'

const FriendsList: FC = () => {

	const friends = useSelector((state: RootState) => state.friends)

	return (
		<div className={s.friendsList}>
			<SortFriends />
			<SearchFriends />
			{friends.map(friend => <FriendsItem online={friend.online}
				name={friend.name} avaSrc={friend.avatar}
				surname={friend.surname} key={friend.id} />)}
		</div>
	)
}

export default FriendsList