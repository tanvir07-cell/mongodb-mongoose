import { connect } from "../connect.js";
import { School } from "./school.js";

export const createSchool = async () => {
  try {
    await connect();
    const firstSchool = {
      name: "DIU",
      openSince: 2002,
      students: 4000,
      isGreat: false,
    };
    const secondSchool = {
      name: "EWU",
      openSince: 1990,
      students: 5000,
      isGreat: true,
    };
    const school = await School.create([firstSchool, secondSchool]);
    // find one:
    const match = await School.findOne({ students: { $gt: 4000 } }).exec();
    console.log(match);
    return school;
  } catch (err) {
    console.log(err);
  }
};

createSchool();
