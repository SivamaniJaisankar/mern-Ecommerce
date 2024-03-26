import express from "express";
const router = express.Router();
import { userLogin, userRegister } from "../controllers/userController.js";

//handle login
router.route("/login").post(userLogin);
//handle Register
router.route("/register").post(userRegister)

export default router;
