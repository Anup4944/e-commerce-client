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

const PORT = 5000;

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

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

app.use((error, req, res, next) => {
  handleError(error, res);
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Backend server is running at http://localhost:${PORT}`);
});
