import React from 'react'
import s from './SearchFriends.module.scss'
import lupa from './../../../../img/svg/search.svg'


const SearchFriends = () => {
	return (
		<div className={s.searchFriends}>
			<input className={s.searchField} type="text" />
			<img className={s.button} src={lupa} alt="" />
		</div>
	)
}

export default SearchFriends