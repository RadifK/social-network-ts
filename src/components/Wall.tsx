import { ChangeEvent, MouseEvent, useState } from 'react'
import s from './../style/Wall.module.scss'
import Post from './Post'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'




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
			message: 'gg wp',
			isLiked: true
		},
	])

	const [value, setValue] = useState<string>("")

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	const likeClick = (id: number) => {
		for (let i = 0; i < posts.length; i++) {
			if (posts[i].id === id) {
				if (posts[i].isLiked) {
					posts[i].isLiked = false;
					posts[i].likes -= 1;
				}
				else {
					posts[i].isLiked = true;
					posts[i].likes += 1;
				}
			}
			setPosts([...posts])
		}
	}

	const addPost = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setPosts([...posts, {
			id: Number(new Date),
			authorName: 'Radif Nurlanovich',
			likes: 0,
			message: value,
			isLiked: false
		}])
		setValue('')
	}

	const deletePost = (id: number) => {
		setPosts(posts.filter(post => post.id !== id))
	}



	return (

		<div className={s.wall}>

			{posts.map(post => <Post
				deletePost={deletePost}
				key={post.id}
				id={post.id}
				authorName={post.authorName}
				message={post.message}
				likes={post.likes}
				isLiked={post.isLiked}
				likeClick={likeClick}
			/>)}

			<form className={s.createPostForm} action="">
				<MyInput onChange={changeHandler} value={value} type="text" />
				<MyButton onClick={addPost} >Добавить пост</MyButton>
			</form>




		</div>
	)
}

export default Wall