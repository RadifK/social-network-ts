import React from 'react'
import s from './ProfilePage.module.scss'
import FriendsBlock from './FriendsBlock/FriendsBlock'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import Wall from './Wall/Wall'

const ProfilePage = () => {
	return (
		<div className={s.profilePage}>
			<ProfileHeader />
			<Wall />
			<FriendsBlock />
		</div>
	)
}

export default ProfilePage