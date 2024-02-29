import {configureStore} from "@reduxjs/toolkit";
import counter from "./container/counter/slice";
import cart from "./container/cart/slice";

export const store = configureStore({
	reducer: {
		counter,
		cart,
	},
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;