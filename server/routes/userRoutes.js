import express from "express";
const router = express.Router();
import {
  userLogin,
  userLogout,
  userRegister,
  userUpdate,
} from "../controllers/userController.js";

//handle login
router.route("/login").post(userLogin);
//handle Register
router.route("/register").post(userRegister);
//handle Update
router.route("/update").put(userUpdate);
//handle logout
router.route("/logout").get(userLogout);


export default router;
