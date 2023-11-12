import s from '../style/Post.module.scss';
import like from '../img/svg/like.svg';
import cross from '../img/svg/cross.svg'
import pencil from '../img/svg/pencil.svg'
import { FC, useState } from 'react';
import EditPostForm from './EditPostForm';
import { deletePost } from '../redux/slices/postsSlice';
import { useDispatch } from 'react-redux';

interface PostProps {
	id: number,
	authorName: string,
	message: string,
	likes: number,
	isLiked: Boolean,
	date: any,
	likeClick: (id: number) => void,
	editPost: (id: number, value: string) => void,
	rerenderPosts?: (id: number) => void
}

const Post: FC<PostProps> = ({ authorName, message, likes, isLiked, likeClick, id, editPost, date }) => {

	const dispatch = useDispatch()

	const [editVisible, setEditVisible] = useState(false)

	return (
		<div className={s.post}>
			<div className={s.authorName}>{authorName}</div>
			<p className={s.date}>{date}</p>
			<img onClick={() => setEditVisible(!editVisible)} className={s.editImg} src={pencil} alt="" />
			<EditPostForm editVisible={editVisible}
			/>

			<img className={s.deletePost} onClick={(e) => {
				dispatch(deletePost({ e, id }))
			}} src={cross} alt="" />
			<p className={editVisible ? `${s.message} ${s.invisible}` : s.message}>{message}</p>
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