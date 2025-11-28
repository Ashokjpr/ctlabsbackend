import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import pageRoutes from "./routes/pageRoutes.js";
import authRoutes from "./routes/auth.js";
import uploadImgRoutes from "./routes/uploadImgRoutes.js";
import adminAuth from "./middleware/adminAuth.js";

dotenv.config();
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


// make uploads folder public
app.use("/uploads", express.static("uploads"));


// Routes
app.use("/api", pageRoutes);
app.use("/api/auth",authRoutes);

app.use("/api/images", uploadImgRoutes);


app.get("/", (req, res) => {
  res.send("Backend running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
