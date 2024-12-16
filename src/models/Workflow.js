const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkflowSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  triggers: [{ type: String }],
  actions: [{ type: String }]
});

module.exports = mongoose.model('Workflow', WorkflowSchema);
