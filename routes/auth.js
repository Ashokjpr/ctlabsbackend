import express from "express";
import User from "../models/Users/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();


console.log("JWT_SECRET from env:", process.env.JWT_SECRET);


/* REGISTER */
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields are required" });

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({
    name,
    email,
    password: hashedPassword
  });

  res.json({ message: "Registration successful" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Incorrect password" });

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "strict"
  });

  res.json({ message: "Login successful" });
});

/* LOGOUT */
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
});

/* GET USER INFO (PROTECTED) */
router.get("/me", adminAuth, async (req, res) => {
  const user = await User.findById(req.user.id).select("-password");
  res.json(user);
});

// Protected Route Example 
router.get("/admin/dashboard", adminAuth, (req, res) => {
  res.json({ message: "Welcome Admin", adminId: req.user.id });
});

export default router;
