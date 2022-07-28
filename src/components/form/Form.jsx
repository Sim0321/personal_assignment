import React from "react";
import { useState } from "react";
import "../form/style.css";

const Form = ({ todos, setTodos }) => {
  const initialState = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };

  const [todo, setTodo] = useState(initialState);
  // console.log(todo);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log("name", name, "value", value);
    setTodo({ ...todo, [name]: value, id: todos.length + 1 });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo(initialState);
  };

  return (
    <form className="form " onSubmit={onSubmitHandler}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          className="title"
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          className="content"
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
      </div>

      <button className="btn">추가하기</button>
    </form>
  );
};

export default Form;
