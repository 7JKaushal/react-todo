import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./Components/Form/Form";
import Todo from "./Components/Todo/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilteredTotos] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line
    getLocalStorage();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalStorage();
    // eslint-disable-next-line
  }, [todo, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTotos(todo.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTotos(todo.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTotos(todo);
        break;
    }
  };

  const saveLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const getLocalStorage = () => {
    if (localStorage.getItem("todo") === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todo"));
      setTodos(todoLocal);
    }
  };
  return (
    <div className="App">
      <header className="App-header">React To-Do List</header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todo={todo}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todo filteredTodos={filteredTodos} todo={todo} setTodos={setTodos} />
    </div>
  );
}

export default App;
