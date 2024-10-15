import express from "express";

import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// get all products
router.get("", getProducts);

// post new product
router.post("", createProduct);

// update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

export default router;
