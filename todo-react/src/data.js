const getTodosAndLabels = () => {
  // loadJSON("label");
  // loadJSON("user");
  const GetTodos = {
    todos: {
      id: "",
      tiltle: "",
      notes: {
        text: "",
        isCompleted: "",
      },
      labels: {
        id: "",
        name: "",
      },
      color: "",
      isCheckboxMode: "",
    },
    labels: {
      id: "",
      name: "",
    },
    user: {
      name: "",
      email: "",
      listMode: "",
      darkMode: "",
    },
  };
  return GetTodos;
};

const createLabel = (name) => {
  const fs = require("fs");
  fs.readFile("./src/data/label.json", "utf-8", function (error, data) {
    let list = JSON.parse(data);
    const createLabel = {
      id: list.length + 1,
      name: name,
    };
    list.push(createLabel);
    fs.writeFileSync("./src/data/label.json", JSON.stringify(list), "utf-8");
  });
};
const createTodo = (title, notes, labels, color, isCheckboxMode) => {
  const fs = require("fs");
  fs.readFile("./src/data/todo.json", "utf-8", function (error, data) {
    let list = JSON.parse(data);
    const todo = {
      title: title,
      notes: notes,
      labels: labels,
      color: color,
      isCheckboxMode: isCheckboxMode,
    };
    list.push(todo);
    fs.writeFileSync("./src/data/todo.json", JSON.stringify(list), "utf-8");
  });
};
const deleteTodo = (id) => {};

const copyTodo = ({ id }) => {};
const updateTodo = ({ id, title, notes, labels, color, isCheckboxMode }) => {};

const updateUser = ({ listMode, darkMode }) => {};

const subscribeTodos = ({}) => {};
const subscribeLabels = ({}) => {};

export {
  getTodosAndLabels,
  createLabel,
  createTodo,
  deleteTodo,
  copyTodo,
  updateTodo,
  updateUser,
  subscribeTodos,
  subscribeLabels,
};
