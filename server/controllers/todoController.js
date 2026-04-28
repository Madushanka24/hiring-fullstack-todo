import Todo from "../models/Todo.js";

// GET all
export const getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

// CREATE
export const createTodo = async (req, res) => {
  const { title, description } = req.body;

  const todo = new Todo({ title, description });
  await todo.save();

  res.status(201).json(todo);
};

// UPDATE
export const updateTodo = async (req, res) => {
  const { title, description } = req.body;

  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { title, description },
    { new: true }
  );

  res.json(updated);
};

// TOGGLE DONE
export const toggleTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  todo.done = !todo.done;
  await todo.save();

  res.json(todo);
};

// DELETE
export const deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};