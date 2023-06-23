import { connect } from "../connect.js";
import { School } from "./school.js";

export const createSchool = async () => {
  try {
    await connect();
    const firstSchool = {
      name: "UIU",
      openSince: 2005,
      students: 10000,
      isGreat: true,
      staff: ["Tanvir", "Rifat", "Arafat", "Farabi"],
    };
    const secondSchool = {
      name: "EWU",
      openSince: 1990,
      students: 5000,
      isGreat: true,
    };

    const school = await School.create(firstSchool);
    // find one:
    // const match = await School.findOne({ students: { $gt: 4000 } }).exec();
    // console.log(match);
    console.log(school.staffCount);
    // return school;
  } catch (err) {
    console.log(err);
  }
};

createSchool();
