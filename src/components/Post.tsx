import s from '../style/Post.module.scss';
import like from '../img/svg/like.svg';
import cross from '../img/svg/cross.svg'
import pencil from '../img/svg/pencil.svg'
import { FC, useState } from 'react';
import EditPostForm from './EditPostForm';


interface PostProps {
	id: number,
	authorName: string,
	message: string,
	likes: number,
	isLiked: Boolean,
	date: any,
	likeClick: (id: number) => void,
	deletePost: (id: number) => void,
	editPost: (id: number, value: string) => void,
	rerenderPosts?: (id: number) => void
}



const Post: FC<PostProps> = ({ authorName, message, likes, isLiked, likeClick, id, deletePost, editPost, date }) => {



	const [editVisible, setEditVisible] = useState(false)

	return (
		<div className={s.post}>
			<div className={s.authorName}>{authorName}</div>
			<p className={s.date}>{date}</p>
			<img onClick={() => setEditVisible(!editVisible)} className={s.editImg} src={pencil} alt="" />
			<EditPostForm
				id={id}
				editVisible={editVisible}
				setEditVisible={setEditVisible}
				editPost={editPost}
			/>

			<img className={s.deletePost} onClick={() => {
				deletePost(id)
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