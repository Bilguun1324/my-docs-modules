import mongoose, { Schema } from "mongoose";

// Define the schema for the Article model
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("User", UserSchema);

export { UserModel };
