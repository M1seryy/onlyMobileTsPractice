const { Schema, model } = require("mongoose");

// const task = new Schema({
//   id: {
//     type: Number,
//   },
//   task: {
//     type: String,
//   },

//   dueDate: {
//     type: String,
//   },
//   priority: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

const todo = new Schema({
  id: {
    type: String,
  },
  title: {
    type: String,
  },
  complete: {
    type: String,
  },
});

const Task = model("todo", todo);

module.exports = Task;
