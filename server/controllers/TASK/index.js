const { getAllTodo, createTodoService } = require("../../services/TASKS");

const allTaskController = async (req, res) => {
  const responce = await getAllTodo();
  res.json({
    todo: responce,
  });
};

const createTodo = async (req, res, next) => {
  const { title, complete } = req.body;
  try {
    if (title && complete) {
      const result = await createTodoService({ title, complete });

      res.status(201).json({
        status: "success",
        code: 201,
        data: { todo: result },
      });
    } else {
      res.status(400).json({
        message: "Validation eroor",
      });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

module.exports = {
  allTaskController,
  createTodo,
};
