import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/studentTest");
    console.log("Database connected");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
