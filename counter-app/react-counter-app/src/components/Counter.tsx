import { useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByValue, incrementAlpha, decrementAlpha } from "../store";
export const Counter: React.FC = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Counter App</h3>
            <button onClick={() => dispatch(increment()) }>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(incrementByValue(10))}>Increment By 10</button>
            <button onClick={() => dispatch(incrementAlpha())}>Increment Alpha</button>
            <button onClick={() => dispatch(decrementAlpha())}>Decrement Alpha</button>
        </div>
    )

}