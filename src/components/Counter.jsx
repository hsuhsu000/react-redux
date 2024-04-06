import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const increaseHandler = () => {
    dispatch({ type: "increase" });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrease" });
  };
  return (
    <section className="col-6 offset-3 text-center p-5 mt-5 border border-1 border-black bg-info">
      <h3>Redux Counter</h3>
      <h1>{counter}</h1>
      <hr />
      <button className="btn btn-primary me-3" onClick={increaseHandler}>
        Increase
      </button>
      <button className="btn btn-warning me-3">Increase By 5</button>
      <button className="btn btn-danger" onClick={decreaseHandler}>
        Decrease
      </button>
    </section>
  );
};

export default Counter;
