import "./App.css";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.reducer.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: 10,
          })
        }
      >
        +
      </button>
      <h1>
        counter:{counter}
        {/* {state.counter} */}
      </h1>{" "}
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
          })
        }
      >
        -
      </button>
    </div>
  );
}

export default App;
