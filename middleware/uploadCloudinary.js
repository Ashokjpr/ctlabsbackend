import multer from "multer";

import express from "express";
import cloudinary from "../config/cloudinary.js"; 
import { CloudinaryStorage } from "multer-storage-cloudinary";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "customtechlabs",
    resource_type: "auto",
    allowed_formats: ["jpg", "jpeg", "png", "webp", "gif", "mp4", "webm"],
  },
});

const upload = multer({ storage });

export default upload;
