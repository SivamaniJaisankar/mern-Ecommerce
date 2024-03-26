import express from "express";
const router = express.Router();
import { userLogin } from "../controllers/userController.js";

//handle login
router.route("/login").post(userLogin);

export default router;
