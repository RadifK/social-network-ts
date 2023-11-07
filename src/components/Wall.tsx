import { ChangeEvent, MouseEvent, useState } from 'react'
import s from './../style/Wall.module.scss'
import Post from './Post'
import CreatePostForm from './createPostForm'




const Wall = () => {

	const [posts, setPosts] = useState([
		{
			id: 1,
			authorName: 'Radif Nurlanovich',
			likes: 1,
			message: 'hello world!',
			isLiked: false
		},
		{
			id: 2,
			authorName: 'Radif Nurlanovich',
			likes: 3,
			message: 'gl hf',
			isLiked: false
		},
		{
			id: 3,
			authorName: 'Radif Nurlanovich',
			likes: 5,
			message: 'gg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
			isLiked: true
		},
	])

	const [value, setValue] = useState<string>("")

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const likeClick = (id: number) => {

		const newPosts = posts.map(post => {
			if (post.id === id) {
				if (post.isLiked) {
					post.isLiked = false;
					post.likes -= 1;
				}
				else {
					post.isLiked = true;
					post.likes += 1;
				}
			}
			return post
		})
		setPosts(newPosts)

	}

	const addPost = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setPosts([{
			id: Number(new Date),
			authorName: 'Radif Nurlanovich',
			likes: 0,
			message: value,
			isLiked: false
		}, ...posts])
		setValue('')
	}

	const deletePost = (id: number) => {
		setPosts(posts.filter(post => post.id !== id))
	}

	const editPosts = (id: number, value: string) => {
		const newPosts = posts.map(post => {
			if (post.id === id) {
				post.message = value
			}
			return post
		})

		setPosts(newPosts)
	}



	return (

		<div className={s.wall}>
			<CreatePostForm
				changeHandler={changeHandler}
				value={value}
				addPost={addPost}
			/>
			{posts.map(post => <Post
				deletePost={deletePost}
				key={post.id}
				id={post.id}
				authorName={post.authorName}
				message={post.message}
				likes={post.likes}
				isLiked={post.isLiked}
				likeClick={likeClick}
				editPost={editPosts}
			/>)}
		</div>
	)
}

export default Wall