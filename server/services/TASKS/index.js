const todoSchema = require("../../models/todoSchema");

const getAllTodo = async () => {
  const todoData = await todoSchema.find({});

  return todoData;
};

const createTodoService = ({ title, complete }) => {
  return todoSchema.create({ title, complete });
};

module.exports = {
  getAllTodo,
  createTodoService
};
