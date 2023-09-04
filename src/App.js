import { useState } from "react";
import Todos from "./Todos";
import "./styles.css";
import TodoForm from "./TodoForm";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Wash dishes" },
    { id: 2, content: "Do laundry" }
  ]);

  const addTodo = (todo) => {
    let todos2 = [...todos, todo];
    setTodos(todos2);
  };

  return (
    <div className="App bg-red-500">
      <Todos todos={todos} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}
