import { useEffect, useState } from "react";
import API from "./services/api";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./styles.css";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await API.get("/todos");
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="container">
      <h1>TODO App</h1>

      <TodoForm fetchTodos={fetchTodos} />

      <TodoList todos={todos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;