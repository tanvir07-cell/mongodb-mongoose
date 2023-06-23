import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  // suppose dore nilam district name er ekta model ache and ei school model ti district model ke refer korbe or relation gotabe:
  district: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "district",
  },
  name: {
    type: String,
    required: true,
    // unique:true; eitar means hocceh shudu ei school name field ti ei unique hobe. but ami chaitesi je jate ekta district er moddhe ekta school er name ekbar thakbe. tai compound index use korechi niche:
  },
  openSince: Number,
  students: Number,
  isGreat: Boolean,
  staff: [{ type: String }],
});

// compound index:
schoolSchema.index({ district: 1, name: 1 }, { unique: true });

// middleware hooks : (pre,post,async)
// pre hooks:
// database e save hoaar age ei pre middleware hook ti call hobe:
schoolSchema.pre("save", function () {
  console.log("Before running the database");
});

// post middleware hooks:
schoolSchema.post("save", function () {
  console.log("After running the database");
});

// async hooks:
schoolSchema.post("save", function (doc, next) {
  setTimeout(() => {
    console.log("I am in async hooks", doc);
    next();
  }, 1000);
});

schoolSchema.index({
  district: 1,
  name: 1,
});

// virtuals:
// virtuals are not stored in the database and it's calculated and gives us some reuslt for the schema's object properties.
schoolSchema.virtual("staffCount").get(function () {
  console.log("I am in virtuals");
  return this.staff.length;
});
// creating a model for the schoolSchema:
export const School = mongoose.model("school", schoolSchema);
