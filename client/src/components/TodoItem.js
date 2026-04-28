import API from "../services/api";
import { useState } from "react";

function TodoItem({ todo, fetchTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  // toggle done
  const toggleDone = async () => {
    await API.patch(`/todos/${todo._id}/done`);
    fetchTodos();
  };

  // delete
  const deleteTodo = async () => {
    await API.delete(`/todos/${todo._id}`);
    fetchTodos();
  };

  // update
  const updateTodo = async () => {
    await API.put(`/todos/${todo._id}`, {
      title,
      description,
    });

    setIsEditing(false);
    fetchTodos();
  };

  return (
    <div className={`todo ${todo.done ? "done" : ""}`}>

      <input type="checkbox" checked={todo.done} onChange={toggleDone} />

      {isEditing ? (
        <div className="edit-box">
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={description} onChange={(e) => setDescription(e.target.value)} />

          <button onClick={updateTodo}>Save</button>
        </div>
      ) : (
        <div className="content">
          <h3>{todo.title}</h3>
          <p>{todo.description}</p>
        </div>
      )}

      <div className="actions">
        <button onClick={() => setIsEditing(!isEditing)}>
          Edit
        </button>

        <button onClick={deleteTodo}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;