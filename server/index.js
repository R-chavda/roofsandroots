import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRoute } from "./routes/userRoute.js";
import { residencyRoute } from "./routes/residencyRoute.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use((req, res, next) => {
  if (Object.keys(req.body).length > 0) {
    console.log(`Incoming request to: ${req.originalUrl}`);
    console.log("  req.body:", req.body);
  } else {
    console.log(`Incoming request to: ${req.originalUrl} (no body)`);
  }
  next(); // Call the next middleware in the chain
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/residency", residencyRoute);
