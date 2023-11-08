import { ChangeEvent, MouseEvent, useState } from 'react'
import s from './../style/Wall.module.scss'
import Post from './Post'
import CreatePostForm from './createPostForm'
import moment from 'moment'
import MyInput from './UI/MyInput'
import search from './../img/svg/search.svg'




const Wall = () => {



	const [posts, setPosts] = useState([

		{
			id: Number(new Date()),
			authorName: 'Radif Nurlanovich',
			likes: 1,
			message: 'hello world!',
			isLiked: false,
			date: moment().format('MMM Do YYYY, h:mm a')
		},
		{
			id: Number(new Date()),
			authorName: 'Radif Nurlanovich',
			likes: 3,
			message: 'gl hf',
			isLiked: false,
			date: moment().format('MMM Do YYYY, h:mm a')
		},
		{
			id: Number(new Date()),
			authorName: 'Radif Nurlanovich',
			likes: 5,
			message: 'gg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
			isLiked: true,
			date: moment().format('MMM Do YYYY, h:mm a')
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
		setPosts([...posts, {
			id: Number(new Date),
			authorName: 'Radif Nurlanovich',
			likes: 0,
			message: value,
			isLiked: false,
			date: moment().format('MMM Do YYYY, h:mm a')
		}])
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

	const [searchPostVisible, setSearchPostVisible] = useState(false)

	return (

		<div className={s.wall}>

			<CreatePostForm
				changeHandler={changeHandler}
				value={value}
				addPost={addPost}
			/>
			<div className={s.searchPost}>
				{!searchPostVisible ?
					<img onClick={() => { setSearchPostVisible(!searchPostVisible) }} src={search} alt="" />
					: <div className={s.searchInput}>
						<MyInput /> <span onClick={() => setSearchPostVisible(!searchPostVisible)}>x</span>
					</div>}
			</div>
			<div className={s.postList}>
				{posts.map(post => <Post
					deletePost={deletePost}
					key={post.id}
					id={post.id}
					authorName={post.authorName}
					message={post.message}
					likes={post.likes}
					isLiked={post.isLiked}
					date={post.date}
					likeClick={likeClick}
					editPost={editPosts}
				/>)}
			</div>
		</div>
	)
}

export default Wall