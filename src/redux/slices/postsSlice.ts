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

	},
	{
		id: 2,
		authorName: 'Radif Nurlanovich',
		likes: 3,
		message: 'gl hf',
		isLiked: false,
		date: moment().format('MMM Do YYYY, h:mm a'),

	},
	{
		id: 3,
		authorName: 'Radif Nurlanovich',
		likes: 5,
		message: 'gg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wpgg wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww',
		isLiked: true,
		date: moment().format('MMM Do YYYY, h:mm a'),

	},
]





export const postsSlice = createSlice({
	name: 'postsSlice',
	initialState,
	reducers: {
		addPost: (state, { payload }) => {

			return [...state, {
				id: Number(new Date),
				authorName: 'Radif Nurlanovich',
				likes: 0,
				message: payload.value,
				isLiked: false,
				date: moment().format('MMM Do YYYY, h:mm a'),

			}]
		},

		deletePost: (state, { payload }) => {
			return state.filter(post => post.id !== payload)
		},

		editPost: (state, { payload }) => {
			state.map((post) => {
				if (post.id === payload.id) {
					post.message = payload.editPostValue
					console.log(payload.editPostValue)
				}
				return post
			})
		},

		likePost(state, { payload }) {
			state.map(post => {
				if (post.id === payload) {
					post.isLiked ? post.likes -= 1 : post.likes += 1;
					post.isLiked = !post.isLiked
				}
			})
		},


	},
})

export const { addPost, deletePost, editPost, likePost } = postsSlice.actions

export default postsSlice.reducer