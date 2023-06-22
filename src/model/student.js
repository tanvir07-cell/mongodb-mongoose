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
  // referencing the school model and it's called association in nested Schema:
  school: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // ei ref er maddomei school er model ti reference hoye jabe student model er sathe:
    // ar ei ref er name to hobe amar school model er collection er name ja ta:
    ref: "school",
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
