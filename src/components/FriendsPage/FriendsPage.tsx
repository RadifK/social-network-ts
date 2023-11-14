import FriendsList from './FriendsList/FriendsList'
import s from './FriendsPage.module.scss'



const FriendsPage = () => {
	return (
		<div className={s.friendsPage}>
			<FriendsList />
			<div className={s.secondBlock}></div>
		</div >
	)
}

export default FriendsPage