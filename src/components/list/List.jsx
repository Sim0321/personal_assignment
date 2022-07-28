import React from "react";
import "./style.css";
import Todo from "../todo/Todo";

const List = ({ todos, setTodos }) => {
  const onDeleteHanlder = (todoId) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== todoId;
    });

    setTodos(newTodos);
  };
  const onEditHandler = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });

    setTodos(newTodos);
  };

  return (
    <div className="list-container">
      <h2>Working..🔥</h2>
      <div className="list-wrapper">
        {todos.map(
          (todo) =>
            !todo.isDone && (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            )
        )}
      </div>
      <h2>Done..!🎉</h2>
      <div className="list-wrapper">
        {todos.map(
          (todo) =>
            todo.isDone && (
              <Todo
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
                onDeleteHanlder={onDeleteHanlder}
                onEditHandler={onEditHandler}
              />
            )
        )}
      </div>
    </div>
  );
};

export default List;
