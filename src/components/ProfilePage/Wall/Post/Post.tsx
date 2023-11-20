import s from './Post.module.scss';
import like from '../../../../img/svg/like.svg';
import redLike from './../../../../img/svg/redLike.svg'
import { FC, useState } from 'react';
import EditPostForm from '../EditPostForm';
import { deletePost, likePost } from '../../../../redux/slices/postsSlice';
import { useDispatch } from 'react-redux';
import DropDown from '../../../UI/DropDown/DropDown';


interface PostProps {
	id: number,
	authorName: string,
	message: string,
	likes: number,
	isLiked: Boolean,
	rerenderPosts?: (id: number) => void
}

const Post: FC<PostProps> = ({ authorName, message, likes, isLiked, id }) => {

	const dispatch = useDispatch()

	const [editVisible, setEditVisible] = useState(false)

	const setVisibleHandler = () => {
		setEditVisible(!editVisible)
	}

	const deletePostHandler = () => {

		dispatch(deletePost(id))
	}

	return (
		<div className={s.post}>
			<div className={s.authorName}>{authorName}</div>
			<div className={s.options}>
				<DropDown>
					<div onClick={setVisibleHandler}>Edit</div>
					<div onClick={deletePostHandler}>Delete</div>
				</DropDown>
			</div>
			<EditPostForm
				id={id}
				editVisible={editVisible}
				setVisibleHandler={setVisibleHandler}
				message={message}
			/>
			<p className={editVisible ? `${s.message} ${s.invisible}` : s.message}>{message}</p>
			<div className={isLiked ? `${s.likes} ${s.liked}` : s.likes} onClick={() => {
				dispatch(likePost(id))
			}} >
				{isLiked ?
					<img className={s.likesImg} src={redLike} alt="" />
					:
					<img className={s.likesImg} src={like} alt="" />}
				<span className={s.likesCount}>{likes}</span>
			</div>
		</div>
	)
}

export default Post