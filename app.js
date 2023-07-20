require("dotenv").config();
require("express-async-errors");

const connectDB = require("./db/connectDB");
const productRouter = require("./routes/productRoutes");

const fileUpload = require('express-fileupload');
const express = require("express");
const app = express();

// MIDDLEWARE
app.use(express.static("./public"));
app.use(express.json());
app.use(fileUpload());

// ROUTES
app.use("/api/v1/products", productRouter);

const port = process.env.PORT || 3000;

const Start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`THE SERVER IS LISTENING ON PORT ${port}`));
  } catch (error) {
    console.log(error.message);
  }
};

Start();
