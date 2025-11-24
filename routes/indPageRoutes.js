import express from "express";
import { createIndPageData, getIndPageData, updateIndPageData  } from "../controllers/indPageController.js";

const indpagerouter = express.Router();
// Industries page  routing
indpagerouter.post("/industries", createIndPageData);
indpagerouter.get("/industries", getIndPageData);
indpagerouter.put("/industries/:id", updateIndPageData);



export default indpagerouter;
