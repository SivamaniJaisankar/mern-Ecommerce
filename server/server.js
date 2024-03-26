import express from "express";
const app = express();
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorHandler.js";
import cookieParser from "cookie-parser";

connectDB();
app.use(cors());
app.use(cookieParser())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server up and running");
});

//handle routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//handle bad requests
app.use(notFound);

//handle error
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
