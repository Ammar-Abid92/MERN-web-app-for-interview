const express = require("express");
const router = express.Router();

router.use("/v1/products", require("./products"));

module.exports = router;
