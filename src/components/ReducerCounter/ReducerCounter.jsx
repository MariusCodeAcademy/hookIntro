import React, { useReducer } from "react";

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function ReducerCounter() {
  // useState padaryti kad veiktu counteris
  // const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  function increment() {
    // setCount(count + 1);
    dispatch({ type: "increment" });
  }
  function decrement() {
    // setCount(count - 1);
    dispatch({ type: "decrement" });
  }
  function resetCounter() {
    // setCount(count - 1);
    dispatch({ type: "reset" });
  }

  return (
    <div>
      <h4>ReducerCounter</h4>
      <h2>{state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={resetCounter}>reset</button>
    </div>
  );
}

export default ReducerCounter;
