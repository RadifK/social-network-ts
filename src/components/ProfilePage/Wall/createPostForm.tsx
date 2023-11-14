import { ChangeEvent, MouseEvent, FC, useState } from 'react'
import MyButton from '../../UI/MyButton'
import MyInput from '../../UI/MyInput'
import s from './Wall.module.scss'
import { addPost } from '../../../redux/slices/postsSlice'
import { useDispatch } from 'react-redux'



const createPostForm: FC = () => {

	const [value, setValue] = useState('')

	const dispatch = useDispatch()

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		dispatch(addPost({ value }))
		setValue('')
	}

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => { setValue(e.target.value) }

	return (
		<form className={s.createPostForm} action="">
			<MyInput placeholder="What's new?" onChange={changeHandler} value={value} type="textarea" />
			<MyButton onClick={clickHandler} >Post</MyButton>
		</form>
	)
}

export default createPostForm