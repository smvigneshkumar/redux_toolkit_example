import "./styles.css";
import { counterActions } from "./store";
import { useSelector, useDispatch } from "react-redux";

export default function App(props) {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();
  const handleDecrement = () => {
    dispatch(counterActions.decrement(2));
  };

  const handleIncrement = () => {
    dispatch(counterActions.increment(5));
  };

  const handleToggle = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      {showCounter && (
        <div>
          <h2>{counter}</h2>
        </div>
      )}
      <button onClick={handleIncrement}>Increment by 5</button>
      <button onClick={handleDecrement}>Decrement by 2</button>
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
}
