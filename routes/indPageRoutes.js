import express from "express";
import  upload  from '../middleware/uploadCloudinary.js'
import { createIndPageData, getIndPageData, updateIndPageData, deleteIndPageData,updateImages } from "../controllers/indPageController.js";

const indpagerouter = express.Router();
// Industries page  routing
indpagerouter.post("/industries",upload.single("image"), createIndPageData);
indpagerouter.get("/industries", getIndPageData);
indpagerouter.put("/industries/:id", updateIndPageData);
indpagerouter.delete("/industries/:id", deleteIndPageData)
indpagerouter.put("/industries/cardimg/:id",upload.single("image"), updateImages)


export default indpagerouter;
