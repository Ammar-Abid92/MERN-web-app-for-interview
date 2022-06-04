const express = require("express");
const router = express.Router();
const Products = require("../models/products");


router.get("/all", async (req, res) => {
  const products = await Products.find({}); // get all data from products collection
  console.log(products);
  res.status(200).json({
    status: "success",
    results: products.length,
    data: {
      products,
    },
  });
});

// dynamic query param
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findOne({ _id: id });
  res.status(200).json({
    status: "success",
    data: {
      product,
    },
  });
});

module.exports = router;
