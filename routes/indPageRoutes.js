import express from "express";
import { createIndPageData, getIndPageData, updateIndPageData, deleteIndPageData  } from "../controllers/indPageController.js";

const indpagerouter = express.Router();
// Industries page  routing
indpagerouter.post("/industries", createIndPageData);
indpagerouter.get("/industries", getIndPageData);
indpagerouter.put("/industries/:id", updateIndPageData);
indpagerouter.delete("/industries/:id", deleteIndPageData)


export default indpagerouter;
