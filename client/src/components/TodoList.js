import TodoItem from "./TodoItem";

function TodoList({ todos, fetchTodos }) {
  return (
    <div className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          fetchTodos={fetchTodos}
        />
      ))}
    </div>
  );
}

export default TodoList;