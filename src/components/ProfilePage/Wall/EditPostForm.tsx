import MyButton from "../../UI/MyButton/MyButton"
import s from './Post/Post.module.scss'
import { ChangeEvent, FC, MouseEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { editPost } from "../../../redux/slices/postsSlice"
import MyTextArea from "../../UI/MyTextArea/MyTextArea"


type TypeEditFormProps = {
	editVisible: Boolean,
	setVisibleHandler: () => void,
	id: number,
	message: string
}



const EditPostForm: FC<TypeEditFormProps> = ({ setVisibleHandler, editVisible, id, message }) => {



	const [editPostValue, setEditPostValue] = useState(message)

	const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
			<MyTextArea value={editPostValue} onChange={changeHandler} />
			<MyButton onClick={clickHandler}>ok</MyButton>
		</form>
	)
}

export default EditPostForm