import React from 'react'
import s from './SortFriends.module.scss'



const SortFriends = () => {
	return (
		<div className={s.sort}>
			<div className={`${s.option} ${s.active} `}>All friends</div>
			<div className={s.option}>Friends online</div>
		</div>
	)
}

export default SortFriends