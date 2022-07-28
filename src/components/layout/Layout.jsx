import React from "react";
import "./style.css";
import Header from "../header/Header";
import Form from "../form/Form";
import List from "../list/List";
import { useState } from "react";

const Layout = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: false,
    },
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다",
      isDone: true,
    },
  ]);

  return (
    <div className="layout">
      <Header />
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Layout;
