const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date },
  endDate: { type: Date },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }],
  client: { type: Schema.Types.ObjectId, ref: 'Client' }
});

module.exports = mongoose.model('Project', ProjectSchema);
