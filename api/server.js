import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import multer from "multer";
import { handleError } from "./utils/errorHandler.js";

const PORT = 5001;

//midddleware
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

//database connection
mongoose
  .connect(process.env.MONGO_URL, {})
  .then(console.log("Database connection successful"))
  .catch((err) => console.log(err));

// Load routers
import clientRouter from "./routes/client.route.js";
import authRouter from "./routes/auth.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/categeory.route.js";
import checkOutRouter from "./routes/checkOut.route.js";

//Use Api
app.use("/api/v1/user", clientRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/checkout", checkOutRouter);

//404 return
app.use((req, res, next) => {
  const error = new Error("Resources not found");
  error.status = 404;

  next(error);
});

// handle error
app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Backend server is running at http://localhost:${PORT}`);
});
