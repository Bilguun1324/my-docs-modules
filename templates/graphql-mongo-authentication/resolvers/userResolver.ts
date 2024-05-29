import { UserModel } from "../schemas";
import jwt from "jsonwebtoken";

const signUp = async (_: any, params: any) => {
  try {
    // Create a new user
    const newUser = new UserModel({
      email: params.email,
      password: params.password,
    });
    await newUser.save();

    // Generate the JWT
    const token = jwt.sign({ userId: newUser.id }, "secretKey", {
      expiresIn: "1w",
    });

    return { token, user: newUser };
  } catch (err) {
    return err;
  }
};

const login = async (_: any, params: any) => {
  try {
    // Find the User by email
    const user = await UserModel.findOne({ email: params.email });
    if (!user) {
      throw new Error("User not found");
    }

    // Check if the password is correct
    if (params.password !== user.password) {
      throw new Error("Incorrect password");
    }
    
    // Generate the JWT
    const token = jwt.sign({ userId: user.id }, "secretKey", {
      expiresIn: "1w",
    });
    return { token, user };
  } catch (err) {
    return err;
  }
};

export { signUp, login };
