const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, required: true },
  contactInfo: { type: String },
  company: { type: String },
  billingAddress: { type: String },
  projectHistory: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  contracts: [{ type: String }],
  invoices: [{ type: String }]
});

module.exports = mongoose.model('Client', ClientSchema);
