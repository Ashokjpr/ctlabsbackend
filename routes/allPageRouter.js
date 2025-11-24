import express from "express";
import {  createAllPageData, getallPageTextData, createAllPageCardData, getPageCardData } from "../controllers/allPageController.js";

const allpagerouter = express.Router();
// all   page routing
allpagerouter.post("/textdata", createAllPageData);
allpagerouter.get("/textdata/:pagename" , getallPageTextData);
allpagerouter.post("/carddata", createAllPageCardData);
allpagerouter.get("/carddata/:pagename" , getPageCardData);


export default allpagerouter;
 