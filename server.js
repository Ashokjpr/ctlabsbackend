// MUST be first line
import dotenv from "dotenv";
dotenv.config();  // MUST RUN BEFORE ANY OTHER IMPORT
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import pageRoutes from "./routes/pageRoutes.js";
import authRoutes from "./routes/auth.js";
import uploadImgRoutes from "./routes/uploadImgRoutes.js";
import adminAuth from "./middleware/adminAuth.js";

connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://customtechct.vercel.app"
  ],
  credentials: true 
}));


// Routes
app.use("/api", pageRoutes);
app.use("/api/auth",authRoutes);

app.use("/api/images", uploadImgRoutes);


app.get("/", (req, res) => {
  res.send("Backend running...");
});

app.use((err, req, res, next) => {
  console.error("🔥 GLOBAL ERROR:", err);
  res.status(500).json({ success: false, error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
