import MyButton from "./UI/MyButton"
import MyInput from "./UI/MyInput"
import s from './../style/Post.module.scss'
import { ChangeEvent, FC, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { editPost } from "../redux/slices/postsSlice"


type TypeEditFormProps = {
	editVisible: Boolean,
	setVisibleHandler: () => void,
	id: number
}

const EditPostForm: FC<TypeEditFormProps> = ({ setVisibleHandler, editVisible, id }) => {

	const [editPostValue, setEditPostValue] = useState('')

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEditPostValue(e.target.value)
	}

	const dispatch = useDispatch()

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setVisibleHandler();
		dispatch(editPost({ id, editPostValue }))
	}

	return (
		<form className={!editVisible ? `${s.editForm} ${s.invisible}` : s.editForm}>
			<MyInput value={editPostValue} onChange={changeHandler} />
			<MyButton onClick={clickHandler}>ok</MyButton>
		</form>
	)
}

export default EditPostForm