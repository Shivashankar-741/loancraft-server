import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("server side from loancraft app");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`.inverse.green);
});
