import { useDispatch, useSelector } from "react-redux";
import "./index.css";
import { RootState } from "../../store";
import { decrement, increment } from "./slice";


export function Counter() {
	const count = useSelector((state: RootState) => state.counter.value);

	const dispatch = useDispatch();

	return (
		<div className="counter">
			<button className="button" onClick={() => dispatch(decrement())}>
				-
			</button>

			<span className="value">{count}</span>
			
			<button className="button" onClick={() => dispatch(increment())}>
				+
			</button>
		</div>
	);
}