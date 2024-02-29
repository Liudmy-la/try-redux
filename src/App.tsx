import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from './store';
// import {Counter} from "./container/counter";
// import { incrementByAmount } from './container/counter/slice';
import { CartList } from './container/cart';
import { add } from './container/cart/slice';

const App: React.FC <{}> = () => {
	// const count = useSelector((state: RootState) => state.counter.value);

	const dispatch = useDispatch();

	return (
		<div className='App'>
			<header className='App-header'>
				<input 
					placeholder='Add to cart'
					onBlur={(e) => dispatch(add({title: e.target.value}))}
				/>

				<CartList />
			</header>
		</div>
	);
};

export default App;
