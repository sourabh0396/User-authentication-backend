
const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    lname: String,
    email: { type: String, unique: true },
    password: String,
    userType: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
// const mongoose = require("mongoose");
// // const { emit } = require("nodemon");

// const UserDetailsSchema = new mongoose.Schema(
// {
//     uname:String,
//     email:String,
//     phoneNo:String,
// },
// {
//     collation:"UserInfo",
// }
// );
// mongoose.model("UserInfo",UserDetailsSchema);




