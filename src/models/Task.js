const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  assignee: { type: Schema.Types.ObjectId, ref: 'User' },
  dueDate: { type: Date },
  priority: { type: String, enum: ['Low', 'Medium', 'High'] },
  status: { type: String, enum: ['To Do', 'In Progress', 'Done'] },
  tags: [{ type: String }],
  subtasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  dependencies: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  estimatedTime: { type: Number },
  timeSpent: { type: Number }
});

module.exports = mongoose.model('Task', TaskSchema);
