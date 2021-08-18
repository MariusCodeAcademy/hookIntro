import React, { useReducer, useState } from "react";
import RTodo from "./RTodo";

export const ACTION = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};

function todoReducer(todosArr, action) {
  switch (action.type) {
    case ACTION.ADD_TODO:
      return [...todosArr, newTodo(action.payload)];
    case ACTION.TOGGLE_TODO:
      return todosArr.map((t) => {
        if (action.payload === t.id) return { ...t, done: !t.done };
        return t;
      });
    case ACTION.DELETE_TODO:
      // gauti versija todoArr be to kas buvo paspausta
      return todosArr.filter((t) => t.id !== action.payload);
    default:
      return todosArr;
  }
}

function newTodo(newTodoTitle) {
  return { id: Date.now(), title: newTodoTitle, done: false };
}

function ReducerSimpleTodo() {
  const [todosArr, dispatch] = useReducer(todoReducer, []);
  const [title, setTitle] = useState("");

  function todoSubmitHandler(e) {
    e.preventDefault();
    if (title.trim().length === 0) return;
    console.log(title);
    dispatch({ type: ACTION.ADD_TODO, payload: title });
    setTitle("");
  }

  return (
    <>
      <form onSubmit={todoSubmitHandler}>
        <h4>Reducer Simple todo</h4>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Enter todo"
        />
      </form>

      {todosArr.length === 0 && <p>No todos at the moment</p>}
      {todosArr.length > 0 && (
        <div>
          <h6>List</h6>
          <ul>
            {todosArr.map((t) => (
              <RTodo key={t.id} item={t} dispatch={dispatch} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ReducerSimpleTodo;
