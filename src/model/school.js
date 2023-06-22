import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  openSince: Number,
  students: Number,
  isGreat: Boolean,
});

// creating a model for the schoolSchema:
export const School = mongoose.model("school", schoolSchema);
