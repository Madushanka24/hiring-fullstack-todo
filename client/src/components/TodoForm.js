import { useState } from "react";
import API from "../services/api";

function TodoForm({ fetchTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();

    if (!title) return;

    await API.post("/todos", {
      title,
      description,
    });

    setTitle("");
    setDescription("");
    fetchTodos();
  };

  return (
    <form className="form" onSubmit={addTodo}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;