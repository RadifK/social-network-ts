import s from '../style/Post.module.scss';
import like from '../img/svg/like.svg';
import cross from '../img/svg/cross.svg'
import pencil from '../img/svg/pencil.svg'
import { FC, useState } from 'react';
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
	editPost?: (id: number) => void
}



const Post: FC<PostProps> = ({ authorName, message, likes, isLiked, likeClick, id, deletePost }) => {

	const [editPostValue, setEditPostValue] = useState(message)

	return (
		<div className={s.post}>
			<div className={s.authorName}>{authorName}</div>
			<img className={s.editImg} src={pencil} alt="" />
			{/* <MyInput value={editPostValue} onChange={() => { }} />
			<MyButton >ok</MyButton> */}
			<img className={s.deletePost} onClick={() => {
				deletePost(id)
			}} src={cross} alt="" />
			<div className={s.message}>{message}</div>
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