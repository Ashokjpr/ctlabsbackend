import express from "express";
import { upload } from "../middleware/upload.js";
import { updateImages } from "../controllers/imagesController.js";

const router = express.Router();

router.put("/upload/:id", upload.single("image"), updateImages);

export default router;
