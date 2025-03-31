import express from "express";
import { connectDB } from "./db/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.js";
import messageRoutes from "./Routes/message.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // allows us to make cross-origin requests
app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(cookieParser()); // allows us to parse cookies
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});

// connectDB() is called here to ensure that the database is connected before the server starts listening.
