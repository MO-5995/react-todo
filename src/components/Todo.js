import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const initialState = [
    {
      task: "コンビニでレターパック買う",
      isCompleted: false,
    },
    {
      task: "掃除",
      isCompleted: false,
    },
    {
      task: "〇〇に電話",
      isCompleted: false,
    },
  ];
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default Todo;
