import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action/index";

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const mystate = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <div className="container card mt-5">
      <h2>Simple Redux for increment and decrement </h2>
      <button onClick={() => dispatch(incNumber())}>increment</button>

      <h1>{mystate}</h1>

      <button onClick={() => dispatch(decNumber())}>decrement</button>
    </div>
  );
}

export default App;
