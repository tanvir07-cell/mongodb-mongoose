import { connect } from "../connect.js";
import { Student } from "./student.js";

const createStudent = async () => {
  try {
    // connecting the db:
    await connect();
    const student = await Student.create({
      firstName: "Tanvir",
      lastName: "Rifat",
      email: "tanvir15-14402@diu.edu.bd",
      birthDate: new Date("2007-09-29"),

      pets: ["cat", "dog", "cow"],
    });
    console.log(student);
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async () => {
  try {
    await connect();
    const students = await Student.find({});
    console.log(students);
  } catch (err) {
    console.log(err);
  }
};

const getStudentById = async () => {
  try {
    await connect();
    // exec() is used to execute the query:
    const student = await Student.findById("6492a7ad8c0035b17c1902d9").exec();
    console.log(student);
  } catch (err) {
    console.log(err);
  }
};

const updateStudentById = async () => {
  try {
    await connect();
    const student = await Student.findByIdAndUpdate(
      "6492a01e863a3e7152b6f793",
      { firstName: "Tanvir Hassan" },
      { new: true }
    ).exec();
    console.log(student);
  } catch (err) {
    console.log(err);
  }
};

const removeStudentById = async () => {
  try {
    await connect();
    const student = await Student.findByIdAndDelete(
      "6492a01e863a3e7152b6f793"
    ).exec();
    console.log("Student successfully deleted");
  } catch (err) {
    console.log(err);
  }
};

// createStudent();

getStudentById("6492a7ad8c0035b17c1902d9");
