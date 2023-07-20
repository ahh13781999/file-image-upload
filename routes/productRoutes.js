const {
  createProduct,
  getAllProducts,
} = require("../controllers/productController");
const { uploadProductImage } = require("../controllers/uploadController");
const { Router } = require("express");
const productRouter = Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter.route("/upload").post(uploadProductImage);

module.exports = productRouter;
