import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utlis/generateToken.js";

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

export { userLogin };
