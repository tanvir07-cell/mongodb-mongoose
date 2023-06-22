import { connect } from "../connect.js";
import { createSchool } from "./school.crud.js";
import { Student } from "./student.js";
// get the school from the school.crud.js file:
// new version er node.js e async function charao await use kora jay er jonne node.js globally asynchronous dore nibe:

const createStudent = async () => {
  try {
    // connecting the db:
    await connect();
    const school = await createSchool();

    const student = await Student.create({
      firstName: "Arafat",
      lastName: "Farabi",
      email: "arafat@gmail.com",
      school: school._id,
      birthDate: new Date("2007-09-29"),

      pets: ["cat", "dog", "cow", "goat"],
    });
    console.log(student);
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async () => {
  try {
    await connect();
    // select("-firstName -lastName") deoaar fole amake firstName and lastName property gula dekhabe na:
    const students = await Student.find({})
      .select("-firstName -lastName")
      .exec();
    console.log(students);
  } catch (err) {
    console.log(err);
  }
};

const getStudentById = async () => {
  try {
    await connect();
    // exec() is used to execute the query:
    // populate('school') deoaar fole amake pura school object ti ei dibe schools collection theke ar populate na dile shudu school id ta dibe:
    const student = await Student.findById("6493d11643250b9b39e42f0c")
      .populate("school")
      .exec();
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

getAllStudents();
