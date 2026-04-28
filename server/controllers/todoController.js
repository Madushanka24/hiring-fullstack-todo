import Todo from "../models/Todo";


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
