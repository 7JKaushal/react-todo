import React from "react";
import "./Todo.css";

import List from "../List/List";
const Todo = ({ todo, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((individualTodo) => (
          <List
            todo={todo}
            setTodos={setTodos}
            key={individualTodo.id}
            text={individualTodo.text}
            individualTodo={individualTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
