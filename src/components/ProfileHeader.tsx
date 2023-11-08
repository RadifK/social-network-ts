import s from './../style/ProfileHeader.module.scss'
import Cover from './Cover'
import ava from './../img/png-jpg/ava.jpg'

const ProfileHeader = () => {
	return (
		<div className={s.profileHeader}>
			<Cover />

			<div className={s.profileHeaderMain}>
				<div className={s.avatar}> <img src={ava} alt="" /></div>
				<h2 className={s.profileOwner}>Radif Nurlanovich</h2>
				<p className={s.status}>pihui</p>
			</div>
		</div>
	)
}

export default ProfileHeader