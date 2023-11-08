import MyButton from "./UI/MyButton"
import MyInput from "./UI/MyInput"
import s from './../style/Post.module.scss'
import { ChangeEvent, FC, MouseEvent, useState } from "react"



type TypeEditPostForm = {
	id: number
	editVisible: Boolean,
	setEditVisible: any,
	editPost: (id: number, editPostValue: string) => void
}



const EditPostForm: FC<TypeEditPostForm> = ({ id, editVisible, setEditVisible, editPost }) => {

	const [editPostValue, setEditPostValue] = useState('')

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEditPostValue(e.target.value)
	}

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		editPost(id, editPostValue)
		setEditVisible(!editVisible)
	}

	return (
		<form className={!editVisible ? `${s.editForm} ${s.invisible}` : s.editForm}>
			<MyInput value={editPostValue} onChange={changeHandler} />
			<MyButton onClick={clickHandler} >ok</MyButton>
		</form>
	)
}

export default EditPostForm