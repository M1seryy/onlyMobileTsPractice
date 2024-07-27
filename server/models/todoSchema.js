const { Schema, model } = require("mongoose");
const todo = new Schema({
  id: {
    type: String,
    required: [true, "Set name for brand"],
  },
  task: {
    type: String,
  },
  dueDate: {
    type: String,
  },
  priority: {
    type: String,
  },
  completed: {
    type: String,
  },

  description: {
    type: String,
  },
  todo: {
    type: [task],
  },
});

const task = new Schema({
  id: {
    type: Number,
  },
  task: {
    type: String,
  },

  dueDate: {
    type: String,
  },
  priority: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const Task = model("sneakers", todo);

module.exports = Task;
