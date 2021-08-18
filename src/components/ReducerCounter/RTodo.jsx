import React from "react";
import { ACTION } from "./ReducerSimpleTodo";

export default function RTodo({ item, dispatch }) {
  return (
    <li>
      <span style={{ color: item.done ? "lightgray" : "black" }}>
        {item.title}
      </span>
      <button
        onClick={() => dispatch({ type: ACTION.TOGGLE_TODO, payload: item.id })}
      >
        Toggle
      </button>
      <button>Delete</button>
    </li>
  );
}
