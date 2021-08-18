import React from "react";

export default function RTodo({ item }) {
  return (
    <li>
      <span>{item.title}</span>
    </li>
  );
}
