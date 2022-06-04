const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({});
const Products = mongoose.model("products", productSchema);
module.exports = Products;
