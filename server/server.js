import express from "express";
const app = express();
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";

connectDB();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server up and running");
});

//handle routes
app.use("/api/products", productRoutes);

//handle bad requests
app.use(notFound);

//handle error
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
