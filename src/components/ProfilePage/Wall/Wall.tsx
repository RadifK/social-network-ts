import { ChangeEvent, useState } from 'react'
import s from './Wall.module.scss'
import Post from './Post/Post'
import CreatePostForm from './createPostForm'
import MyInput from '../../UI/MyInput'
import search from '../../../img/svg/search.svg'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const Wall = () => {

	const posts = useSelector((state: RootState) => state.posts)

	const [searchPostVisible, setSearchPostVisible] = useState(false)

	const [searchValue, setSearchValue] = useState('')

	const changeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const searchedPosts = () => {
		if (searchValue && searchPostVisible) {
			return posts.filter(post => post.message.toLowerCase().includes(searchValue.toLowerCase()))
		}
		return posts
	}

	return (

		<div className={s.wall}>
			<CreatePostForm
			/>
			{/* <div className={s.searchPost}>
				{!searchPostVisible ?
					<img onClick={() => { setSearchPostVisible(!searchPostVisible) }} src={search} alt="" />
					: <div className={s.searchInput}>
						<MyInput
							value={searchValue}
							onChange={
								changeSearchHandler
							}
						/>  <span onClick={() => {
							setSearchPostVisible(!searchPostVisible)
							setSearchValue('')
						}}>x</span>
					</div>}
			</div> */}
			<div className={s.postList}>
				{searchedPosts().length ?
					searchedPosts().map(post => <Post
						key={post.id}
						id={post.id}
						authorName={post.authorName}
						message={post.message}
						likes={post.likes}
						isLiked={post.isLiked}
					/>) :
					<h1 style={{
						fontSize: '24px',
						fontWeight: '700',
						alignSelf: 'center',
						marginBottom: '200px'
					}}>Посты не найдены</h1>
				}
			</div>
		</div>
	)
}

export default Wall