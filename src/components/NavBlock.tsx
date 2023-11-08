import s from './../style/NavBlock.module.scss'



const NavBlock = () => {
	return (
		<ul className={s.nav}>
			<li>
				My Profile
			</li>
			<li>
				News
			</li>
			<li>
				Messenger
			</li>
			<li>
				Calls
			</li>
			<li>
				Friends
			</li>
			<li>
				Communities
			</li>
			<li>
				Photos
			</li>
			<li>
				Music
			</li>
			<li>
				Videos
			</li>
			<li>
				Clips
			</li>
		</ul>
	)
}

export default NavBlock