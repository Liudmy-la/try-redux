import {createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 10,
}

export const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},

		decrement: (state) => {
			if (state.value > 0) {
				state.value -= 1;
			}
		},

		incrementByAmount: (state, action: PayloadAction<{value: number}>) => {
			state.value += action.payload.value;
		},
	},
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
