import mongoose from "mongoose";

// creating mongoose schema:
const student = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthDate: Date,

  pets: [{ type: String }],

  address: {
    other: Boolean,
    street: String,
    houseNumber: Number,
    zip: Number,
    city: String,
    State: String,
  },
});

// creating mongoose model and it makes a collection called students:
export const Student = mongoose.model("student", student);
