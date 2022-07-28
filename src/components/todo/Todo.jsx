import React from "react";
import "./style.css";

const Todo = ({ todo, onDeleteHanlder, onEditHandler }) => {
  return (
    <div className="todo-container">
      <div className="text-box">
        <h2>{todo.title}</h2>
        <p>{todo.body}</p>
      </div>
      <div className="btn-box">
        <button onClick={() => onDeleteHanlder(todo.id)} className="delete btn">
          삭제하기
        </button>
        <button onClick={() => onEditHandler(todo.id)} className="complete btn">
          {todo.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
