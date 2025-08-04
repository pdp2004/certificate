import { Schema, model } from "mongoose";

const certificateSchema = new Schema({
  certId: {
    type: String,
    required: true,
    unique: true
  },
  studentName: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    default: "Pending"
  }
});

export default model("Certificate", certificateSchema);
