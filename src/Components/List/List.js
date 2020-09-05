import React from "react";
import "./List.css";

const List = ({ text, individualTodo, todo, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todo.filter((el) => el.id !== individualTodo.id));
  };

  const completeHandler = () => {
    setTodos(
      todo.map((item) => {
        if (item.id === individualTodo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li
        className={`todo-item ${individualTodo.completed ? "completed" : ""}`}
      >
        {text}
      </li>
      <button className="complete-btn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default List;
