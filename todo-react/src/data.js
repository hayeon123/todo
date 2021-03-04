import React, { useState } from "react";
import todos from "./data/todo.json";
import user from "./data/user.json";
import labels from "./data/label.json";
import axios from "axios";
const getTodosAndLabels = () => {
  let GetTodos = {
    todos: todos,
    labels: labels,
    user: user,
  };
  return GetTodos;
};
const getTodos = async () => {
  try {
    const response = await axios.get("http://localhost:5000/todos");
    return response.data;
  } catch (e) {}
};
const getLabels = async () => {
  try {
    const response = await axios.get("http://localhost:5000/label");
    return response.data;
  } catch (e) {}
};
const getUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (e) {}
};

const createLabel = (name) => {
  // const fs = require("fs");
};
const createTodo = (title, notes, labels, color, isCheckboxMode) => {
  // const fs = require("fs");
  // fs.readFile("./data/todo.json", "utf-8", function (error, data) {
  //   let list = JSON.parse(data);
  //   const todo = {
  //     title: title,
  //     notes: notes,
  //     labels: labels,
  //     color: color,
  //     isMode: isCheckboxMode,
  //   };
  //   list.push(todo);
  //   fs.writeFileSync("./data/todo.json", JSON.stringify(list), "utf-8");
  // });
};
const deleteTodo = (id) => {
  // const fs = require("fs");
  // fs.readFile("./data/todo.json", "utf-8", function (error, data) {
  //   let list = JSON.parse(data);
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].id === id) {
  //       list.splice(i, 1);
  //     }
  //   }
  // });
};

const copyTodo = ({ id }) => {
  // const fs = require("fs");
  // fs.readFile("./data/todo.json", "utf-8", function (error, data) {
  //   let list = JSON.parse(data);
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].id === id) {
  //       list.push(list[i]);
  //     }
  //   }
  //   fs.writeFileSync("./data/todo.json", JSON.stringify(list), "utf-8");
  // });
};
const updateTodo = ({ id, title, notes, labels, color, isCheckboxMode }) => {
  // const fs = require("fs");
  // fs.readFile("./data/todo.json", "utf-8", function (error, data) {
  //   let list = JSON.parse(data);
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i].id === id) {
  //       const todo = {
  //         title: title,
  //         notes: notes,
  //         labels: labels,
  //         color: color,
  //         isCheckboxMode: isCheckboxMode,
  //       };
  //       list[i] = todo;
  //     }
  //   }
  //   fs.writeFileSync("./data/todo.json", JSON.stringify(list), "utf-8");
  // });
};

const updateUser = ({ listMode, darkMode }) => {
  user.listMode = listMode;
  user.darkMode = darkMode;
};

// const subscribeTodos = ({}) => {};
// const subscribeLabels = ({}) => {};

export {
  getTodosAndLabels,
  createLabel,
  createTodo,
  deleteTodo,
  copyTodo,
  updateTodo,
  updateUser,
  getTodos,
};
