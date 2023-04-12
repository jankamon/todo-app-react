import React, { useEffect, useState, useRef } from "react";
// Styles
import "./App.css";
// Components
import Header from "../Header/Header";
import AddTodoForm from "../AddTodoForm/AddTodoForm";
import TodoList from "../TodoList/TodoList";
import TodosOptions from "../TodosOptions/TodosOptions";
import Footer from "../Footer/Footer";
import uuid from "react-uuid";
import { ThemeProvider } from "../../ThemeContext";

const LOCAL_STORAGE_KEY = "todoApp.todos";

export default function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      name: "you can complete or delete me",
      complete: false,
    },
    {
      id: 1,
      name: "and me you can drag and reorder",
      complete: false,
    },
  ]);

  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (event) => {
    event.preventDefault();
    const name = todoNameRef.current.value;
    if (name === "") return;

    setTodos((prevTodos) => {
      return [{ id: uuid(), name: name, complete: false }, ...prevTodos];
    });

    todoNameRef.current.value = null;
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  };

  const clearCompleted = () => {
    const newTodos = todos.filter((todo) => todo.complete === false);
    setTodos(newTodos);
  };

  const showAll = () => {};

  const showActive = () => {
    
  };

  const showCompleted = () => {};

  return (
    <ThemeProvider>
      <div id="container">
        <Header />
        <main>
          <AddTodoForm addTodo={addTodo} todoNameRef={todoNameRef} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
          <TodosOptions
            todos={todos}
            clearCompleted={clearCompleted}
            showAll={showAll}
            showActive={showActive}
            showCompleted={showCompleted}
          />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
