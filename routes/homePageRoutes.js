import express from "express";
import { getC1PageData, createC1PageData,updateC1PageData, createC2PageData, updateC2PageData, getC2PageData  } from "../controllers/homePageController.js";

const homepagerouter = express.Router();
// home page c1 routing
homepagerouter.get("/homec1", getC1PageData);
homepagerouter.post("/homec1", createC1PageData);
homepagerouter.put("/homec1/:id" , updateC1PageData)

// home page C2 routing
homepagerouter.get("/homec2", getC2PageData)
homepagerouter.post("/homec2", createC2PageData);
homepagerouter.put("/homec2/:id" , updateC2PageData)


export default homepagerouter;
