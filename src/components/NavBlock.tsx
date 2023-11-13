import { Link } from 'react-router-dom'
import s from './../style/NavBlock.module.scss'



const NavBlock = () => {
	return (
		<ul className={s.nav}>
			<li>
				<Link to={"/"}>My Profile</Link>
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
				<Link to={"friends"}>Friends</Link>
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