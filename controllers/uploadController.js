const { StatusCodes } = require("http-status-codes");
const path = require("path");
const fs = require('fs');

const uploadProductImage = async (req, res) => {
  if (!req.files) {
    throw new Error("No File Uploaded");
  }

  let productImage = req.files.image;

  if (!productImage.mimetype.startsWith("image")) {
    throw new Error("Please Upload Image");
  }

  const maxSize = 2048;

  if (productImage.size > maxSize) {
    throw new Error("Please upload image smaller 2KB");
  }

  const imagePath = path.join(
    __dirname,
    "../public/uploads" + `${productImage.name}`
  );

  await productImage.mv(imagePath);

  res
    .status(StatusCodes.CREATED)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

module.exports = {
  uploadProductImage,
};
