import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utlis/generateToken.js";
import bcrypt from "bcryptjs";

//Login User
const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  generateToken(res, user._id);

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

//Register User
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400)
    throw new Error("User already Exists" );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hashedPassword });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201);
    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(400);
    throw new Error("Invalid User Credentials");
  }
});

export { userLogin, userRegister };
