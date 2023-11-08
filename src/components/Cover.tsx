import s from './../style/Cover.module.scss'
import cover from './../img/png-jpg/derevo-sakura-1.png'


const Cover = () => {
	return (
		<div className={s.cover} ><img src={cover} alt="" /></div>
	)
}

export default Cover