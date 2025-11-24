import express from "express";
import homePageRoutes from "./homePageRoutes.js";
import indPageRouter from "./indPageRoutes.js";
import allPageRouter from "./allPageRouter.js";

const router = express.Router();

router.use("/pages", homePageRoutes);
router.use("/pages", indPageRouter);
router.use("/pages", allPageRouter);

export default router;
 