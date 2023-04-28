import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

import authRoute from "./routes/authRoute.js";

import morgan from "morgan";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "Here" });
});

app.use("/api/v1/auth", authRoute);

const port = process.env.PORT || 5003;

const start = async () => {
  await connectDB(process.env.MONGO_URL);

  app.listen(port, () => {
    console.log(`running on ${port}`);
  });
};

start();
