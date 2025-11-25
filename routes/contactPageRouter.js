import express from "express";
import {createMessage, getMessage} from "../controllers/contactController.js";

const contactpagerouter = express.Router();
// Contact page  routing
contactpagerouter.post("/contact", createMessage);
contactpagerouter.get("/contact", getMessage);

export default contactpagerouter;
