import { createSlice } from "@reduxjs/toolkit";



type TypeInitialState = {
	id: number,
	name: string,
	surname: string,
	online: Boolean,
	avatar: string
}


let initialState: TypeInitialState[] = await fetch('https://65230e39f43b179384153062.mockapi.io/items').then((res) => res.json()).then((json) => {
	return json
})












export const friendsSlice = createSlice({
	name: 'friedsSlice',
	initialState,
	reducers: {

	}
})

export default friendsSlice.reducer