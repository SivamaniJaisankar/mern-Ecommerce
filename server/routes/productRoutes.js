import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

//get all products
router.route("/").get(getAllProducts);

//get product by ID
router.route("/:id").get(getProductById);

export default router;
