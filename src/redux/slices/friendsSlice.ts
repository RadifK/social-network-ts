import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = [
	{
		id: 1,
		name: 'Maxim ',
		surname: 'Admiralov',
		ava: '',
		online: true,
	},
	{
		id: 2,
		name: 'Nikita ',
		surname: 'Ortyukov',
		ava: '',
		online: true,
	},
	{
		id: 3,
		name: 'Nikolay ',
		surname: 'Sergeev',
		ava: '',
		online: false,

	},
	{
		id: 4,
		name: 'Alyona',
		surname: 'Bakhtina',
		ava: '',
		online: false,

	},
]

export const friendsSlice = createSlice({
	name: 'friedsSlice',
	initialState,
	reducers: {

	}
})

export default friendsSlice.reducer