import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // for parsing application/json

app.post("/api/products", async (req, res) => {
  const product = req.body; // user send data
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }
  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error: Error while creating product ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running at http://localhost:3000");
});
