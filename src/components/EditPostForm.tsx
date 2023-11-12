import MyButton from "./UI/MyButton"
import MyInput from "./UI/MyInput"
import s from './../style/Post.module.scss'
import { ChangeEvent, FC, MouseEvent, useState } from "react"
import { useSelector, useDispatch } from "react-redux"



const EditPostForm: FC = ({ editVisible }) => {

	const [editPostValue, setEditPostValue] = useState('')

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setEditPostValue(e.target.value)
	}

	const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

	}

	return (
		<form className={!editVisible ? `${s.editForm} ${s.invisible}` : s.editForm}>
			<MyInput value={editPostValue} onChange={changeHandler} />
			<MyButton onClick={clickHandler} >ok</MyButton>
		</form>
	)
}

export default EditPostForm