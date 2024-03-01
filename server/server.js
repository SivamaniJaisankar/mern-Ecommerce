import express from "express";
const app = express();
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT || 5000;
import { products} from "./data/products.js"
import cors from "cors"


app.use(cors())

app.get("/", (req, res) => {
    res.send("Server up and running")
})

app.get("/api/products", (req, res) => {
    res.json(products)
})

app.get("/api/product/:id", (req, res) => {
    const { id } = req.params;
    const product = products.find(product => product.id == id)
    res.json(product)
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
