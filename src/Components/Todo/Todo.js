import React from "react";
import "./Todo.css";
import { useTheme } from "../../ThemeContext";
import iconCheck from "./images/icon-check.svg";

export default function Todo({ todo, removeTodo, toggleTodo }) {
  const themeStyle = useTheme();

  return (
    <li className={themeStyle}>
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`circle todo-button + ${todo.complete ? "complete" : ""}`}
      >
        {todo.complete ? <img src={iconCheck} alt="check icon" /> : ""}
      </span>
      <span className={`todo-text + ${todo.complete ? "complete" : ""}`}>
        {todo.name}
      </span>
      <span
        onClick={() => removeTodo(todo.id)}
        className="remove-button"
      ></span>
    </li>
  );
}
