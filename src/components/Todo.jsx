import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/reducer/todo";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.data);
  const isLoading = useSelector((state) => state.todo.isLoading);
  const getTodoHandler = () => {
    dispatch(getTodos());
    console.log(todos);
  };
  return (
    <>
      <button className="btn btn-primary m-5" onClick={getTodoHandler}>
        Get Todo
      </button>
      <section className="bg-info p-5 mx-5">
        {isLoading && <p>Getting todos...</p>}
        {!isLoading && todos.map((todo) => <p key={todo.id}>{todo.title}</p>)}
        {!isLoading && todos.length < 1 && <p>Click button to get your todos.</p>}
      </section>
    </>
  );
};

export default Todo;
