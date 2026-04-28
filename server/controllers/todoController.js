import Todo from "../models/Todo";


// GET all
export const getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};