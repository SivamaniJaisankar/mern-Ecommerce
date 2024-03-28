import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utlis/generateToken.js";
import bcrypt from "bcryptjs";

//User Login
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

//User Register
const userRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already Exists");
  }

  const user = new User({ name, email, password });
  await user.save();
  generateToken(res, user._id);
  res.status(201);
  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
});

//User Update
const userUpdate = asyncHandler(async (req, res) => {
  const user = await User.findById(req.body._id);

  const { name, email, password } = req.body;

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  if (email !== user.email) {
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400);
      throw new Error("Email already exists");
    }
  }

  user.name = name;
  user.email = email;
  user.password = password;

  await user.save();
  res.status(200);
  res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    password: user.password,
  });
});

//User Logout
const userLogout = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged Out Successfully" });
});

export { userLogin, userRegister, userUpdate, userLogout };
