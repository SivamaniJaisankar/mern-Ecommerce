import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource Not Found");
  }
});

export { getAllProducts, getProductById };
