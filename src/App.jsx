import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import "./App.css";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_count": {
      state.count += 1;
      break;
    }
    case "decremented_count": {
      state.count -= 1;
      break;
    }
    case "set_count": {
      state.count = action.value;
      break;
    }
    default: {
      throw new Error("unknown action: " + action.type);
    }
  }
}

const App = () => {
  const [state, dispatch] = useImmerReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "incremented_count" })}>
        Increase count
      </button>
      <button onClick={() => dispatch({ type: "decremented_count" })}>
        Decrease count
      </button>
      <button onClick={() => dispatch({ type: "set_count", value: 5 })}>
        Set count to 5
      </button>
      <p>{state.count}</p>
    </div>
  );
};

export default App;
