import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import { decrement, increment, incrementBy } from "./components/reducer/CounterSlice";

function App() {
  const count = useSelector((state) => state?.counter?.count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <Navbar count={count} />
        <button onClick={() => dispatch(increment())}>+</button>
        Count : {count}
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementBy(2))}>*</button>
      </div>
    </>
  );
}

export default App;
