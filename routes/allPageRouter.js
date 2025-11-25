import express from "express";
import {  createAllPageData, getallPageTextData,updateTextData,createAllPageCardData, getPageCardData,updateCardData ,deleteCardData } from "../controllers/allPageController.js";

const allpagerouter = express.Router();
// all   page routing
allpagerouter.post("/textdata", createAllPageData);
allpagerouter.get("/textdata/:pagename" , getallPageTextData);
allpagerouter.put("/textdata/:id", updateTextData)
allpagerouter.post("/carddata", createAllPageCardData);
allpagerouter.get("/carddata/:pagename" , getPageCardData);
allpagerouter.put("/carddata/:id", updateCardData)
allpagerouter.delete("/carddata/:id", deleteCardData);


export default allpagerouter;
 