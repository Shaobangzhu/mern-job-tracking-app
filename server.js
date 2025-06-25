import express from "express";
import "express-async-errors";
import morgan from "morgan";
import * as dotenv from "dotenv";
import jobRouter from "./routes/jobRouter.js";
import mongoose from "mongoose";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

// TEST: import { validateTest } from "./middleware/validationMiddleware.js";

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.post(
//   "/api/v1/test",
//   validateTest,
//   (req, res) => {
//     const { name } = req.body;
//     res.json({ message: `hello ${name}` });
//   }
// );

app.use("/api/v1/jobs", jobRouter);

// Not Found Middleware

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// Error Middleware

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}...`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
