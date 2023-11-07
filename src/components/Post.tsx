import s from '../style/Post.module.scss';
import like from '../img/svg/like.svg';
import cross from '../img/svg/cross.svg'
import pencil from '../img/svg/pencil.svg'
import { ChangeEvent, MouseEvent, FC, useState } from 'react';
import MyInput from './UI/MyInput';
import MyButton from './UI/MyButton';


interface PostProps {
	id: number,
	authorName: string,
	message: string,
	likes: number,
	isLiked: Boolean,
	likeClick: (id: number) => void,
	deletePost: (id: number) => void,
	editPost: (id: number, value: string) => void,
	rerenderPosts?: (id: number) => void
}



const Post: FC<PostProps> = ({ authorName, message, likes, isLiked, likeClick, id, deletePost, editPost }) => {

	const [editPostValue, setEditPostValue] = useState(message)

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEditPostValue(e.target.value)
	}

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		editPost(id, editPostValue)
		setEditVisible(!editVisivle)
	}

	const [editVisivle, setEditVisible] = useState(false)

	return (
		<div className={s.post}>
			<div className={s.authorName}>{authorName}</div>
			<img onClick={() => setEditVisible(!editVisivle)} className={s.editImg} src={pencil} alt="" />

			<form className={!editVisivle ? `${s.editForm} ${s.invisible}` : s.editForm}>
				<MyInput value={editPostValue} onChange={changeHandler} />
				<MyButton onClick={clickHandler} >ok</MyButton>
			</form>
			<img className={s.deletePost} onClick={() => {
				deletePost(id)
			}} src={cross} alt="" />
			<p className={editVisivle ? `${s.message} ${s.invisible}` : s.message}>{message}</p>
			<div className={isLiked ? `${s.likes} ${s.liked}` : s.likes} onClick={() => {
				likeClick(id)
			}} >
				<img className={s.likesImg} src={like} alt="" />
				<span className={s.likesCount}>{likes}</span>
			</div>
		</div>
	)
}

export default Post