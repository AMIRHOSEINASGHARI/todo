const { Schema, models, model } = require("mongoose");

const taskSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Task = models.Task || model("Task", taskSchema);

export default Task;
