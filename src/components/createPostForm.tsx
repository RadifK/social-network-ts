import { ChangeEvent, MouseEvent, FC } from 'react'
import MyButton from './UI/MyButton'
import MyInput from './UI/MyInput'
import s from './../style/Wall.module.scss'

interface PostFormPropsType {
	changeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
	value: string,
	addPost: (e: MouseEvent<HTMLButtonElement>) => void
}

const createPostForm: FC<PostFormPropsType> = ({ changeHandler, value, addPost }) => {

	return (
		<form className={s.createPostForm} action="">
			<MyInput placeholder="What's new?" onChange={changeHandler} value={value} type="textarea" />
			<MyButton onClick={addPost} >Post</MyButton>
		</form>
	)
}

export default createPostForm