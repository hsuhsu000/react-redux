import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counterReducer";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const isShow = useSelector((state) => state.counter.isShow);
  const increaseHandler = () => {
    dispatch(counterActions.increase());
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrease());
  };
  const increaseBy5Handler = () => {
    dispatch(counterActions.increaseBy5(5));
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <section className="col-6 offset-3 text-center p-5 mt-5 border border-1 border-black bg-info">
      <h3>Redux Counter</h3>
      {isShow && <h1>{counter}</h1>}

      <hr />
      <button className="btn btn-primary me-3" onClick={increaseHandler}>
        Increase
      </button>
      <button className="btn btn-warning me-3" onClick={increaseBy5Handler}>
        Increase By 5
      </button>
      <button className="btn btn-danger me-3" onClick={decreaseHandler}>
        Decrease
      </button>
      <button className="btn btn-secondary" onClick={toggleHandler}>
        Toggle Counter
      </button>
    </section>
  );
};

export default Counter;
