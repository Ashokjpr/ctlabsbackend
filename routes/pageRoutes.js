import express from "express";
import homePageRoutes from "./homePageRoutes.js";
import indPageRouter from "./indPageRoutes.js";
import allPageRouter from "./allPageRouter.js";
import contactpagerouter from "./contactPageRouter.js";

const router = express.Router();

router.use("/pages", homePageRoutes);
router.use("/pages", indPageRouter);
router.use("/pages", allPageRouter);
router.use("/pages", contactpagerouter);

export default router;
 