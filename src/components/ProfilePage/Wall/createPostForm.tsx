import { ChangeEvent, MouseEvent, FC, useState, useRef, useEffect } from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import s from './Wall.module.scss'
import { addPost } from '../../../redux/slices/postsSlice'
import { useDispatch } from 'react-redux'



const createPostForm: FC = () => {

	const [value, setValue] = useState('')
	const [formActive, setFormActive] = useState(false)
	const formRef = useRef<HTMLFormElement>(null)

	const closeFormHandler = (event: any) => {
		if (formRef.current && !formRef.current.contains(event.target)) {
			setFormActive(false)
			console.log('click outside the form')
		}
	}

	useEffect(() => {
		document.addEventListener("mousedown", closeFormHandler)
		return removeEventListener("mousedown", closeFormHandler)
	}, [])

	const dispatch = useDispatch()

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		dispatch(addPost({ value }))
		setValue('')
		setFormActive(false)
	}
	const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => { setValue(e.target.value) }

	return (
		<form className={s.createPostForm} ref={formRef} action="">
			<textarea className={formActive ? s.visible : ''} placeholder="What's new?"
				onClick={() => { setFormActive(true) }}
				onChange={changeHandler}
				value={value}
			></textarea>
			{formActive ? <div className={s.createPostOptions}>
				<MyButton onClick={clickHandler}>Post</MyButton>
			</div>
				: <></>}
		</form>
	)
}

export default createPostForm