import { Link } from 'react-router-dom'
import s from './NavBlock.module.scss'



const NavBlock = () => {
	return (
		<ul className={s.nav}>
			<Link to={"/"} className={s.navItem}>

				My Profile

			</Link>
			<Link to='/' className={s.navItem}>
				News
			</Link>
			<Link to='/' className={s.navItem}>
				Messenger
			</Link>
			<Link to='/' className={s.navItem}>
				Calls
			</Link>

			<Link to={"friends"} className={s.navItem}>Friends</Link>

			<Link to='/' className={s.navItem}>
				Communities
			</Link>
			<Link to='/' className={s.navItem}>
				Photos
			</Link>
			<Link to='/' className={s.navItem}>
				Music
			</Link>
			<Link to='/' className={s.navItem}>
				Videos
			</Link>
			<Link to='/' className={s.navItem}>
				Clips
			</Link>
		</ul>
	)
}

export default NavBlock