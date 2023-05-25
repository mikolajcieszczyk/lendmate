const mongoose = require("mongoose");
const { Schema } = mongoose;

const applicantSchema = new Schema({
  onfidoId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
