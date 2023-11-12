import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import moment from 'moment'

const initialState = [

	{
		id: 1,
		authorName: 'Radif Nurlanovich',
		likes: 1,
		message: 'hello world!',
		isLiked: false,
		date: moment().format('MMM Do YYYY, h:mm a'),
		isEdit: false
	},
	{
		id: 2,
		authorName: 'Radif Nurlanovich',
		likes: 3,
		message: 'gl hf',
		isLiked: false,
		date: moment().format('MMM Do YYYY, h:mm a'),
		isEdit: false
	},
	{
		id: 3,
		authorName: 'Radif Nurlanovich',
		likes: 5,
		message: 'gg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
		isLiked: true,
		date: moment().format('MMM Do YYYY, h:mm a'),
		isEdit: false
	},
]





export const postsSlice = createSlice({
	name: 'postsSlice',
	initialState,
	reducers: {
		addPost: (state, { payload }) => {
			payload.e.preventDefault()
			return [...state, {
				id: Number(new Date),
				authorName: 'Radif Nurlanovich',
				likes: 0,
				message: payload.value,
				isLiked: false,
				date: moment().format('MMM Do YYYY, h:mm a'),
				isEdit: false
			}]
		},
		deletePost: (state, { payload }) => {
			payload.e.preventDefault()
			return state.filter(post => post.id !== payload.id)
		}
	},
})

export const { addPost, deletePost } = postsSlice.actions

export default postsSlice.reducer