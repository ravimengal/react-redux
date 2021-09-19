import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="container card mt-5">
      <h2>Simple Redux for increment and decrement </h2>
      <button type="button" className="btn btn-success mt-4 mb-4">
        increment
      </button>

      <div className="input-group  ">
        <span className="input"></span>
        <input type="text" />
      </div>

      <button type="button" className="btn btn-danger mt-4">
        decrement
      </button>
    </div>
  );
}

export default App;
