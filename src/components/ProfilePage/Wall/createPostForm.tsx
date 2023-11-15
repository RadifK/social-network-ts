import { ChangeEvent, MouseEvent, FC, useState } from 'react'
import MyButton from '../../UI/MyButton'
import MyInput from '../../UI/MyInput'
import s from './Wall.module.scss'
import { addPost } from '../../../redux/slices/postsSlice'
import { useDispatch } from 'react-redux'



const createPostForm: FC = () => {

	const [value, setValue] = useState('')
	const [formActive, setFormActive] = useState(false)



	const dispatch = useDispatch()

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		dispatch(addPost({ value }))
		setValue('')
		setFormActive(false)
	}
	const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => { setValue(e.target.value) }

	return (
		<form className={s.createPostForm} action="">
			<textarea className={formActive ? s.visible : ''} placeholder="What's new?"
				onClick={() => { setFormActive(true) }}
				onChange={changeHandler}
				value={value}
			></textarea>
			{formActive ? <div className={s.createPostOptions}>
				<MyButton onClick={clickHandler} >Post</MyButton>
			</div>
				: <></>}
		</form>
	)
}

export default createPostForm