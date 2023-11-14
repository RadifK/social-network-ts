import { createSlice } from '@reduxjs/toolkit'

import moment from 'moment'

type TypeInitialState = {
	id: number,
	authorName: string,
	likes: number,
	message: string,
	isLiked: Boolean,
}


let initialState: TypeInitialState[] = await fetch('https://6553d9ad5449cfda0f2f3f15.mockapi.io/posts').then((res) => res.json()).then((json) => {
	return json
})





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