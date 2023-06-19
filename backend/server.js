import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import events from "./data/events.js";
import users from "./data/users.js";
const port = process.env.PORT || 5000;

import userRoutes from "./routes/userRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/users", userRoutes);
app.use("/api/events", eventRoutes);

// app.get("/api/users", (req, res) => {
//   res.json(users);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
