import { configureStore } from "@reduxjs/toolkit";
import posts from './slices/postsSlice'
import friends from './slices/friendsSlice'

export const store = configureStore(
	{
		reducer: { posts, friends },

	}
)


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch