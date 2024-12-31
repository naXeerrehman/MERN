import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   required: true,
  // },
  created: {
    type: Date,
    default: Date.now,
  },
});
const User= mongoose.model("users", userSchema);
export default User
