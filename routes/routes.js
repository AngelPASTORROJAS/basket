import express from "express";
import HomeControler from "../controllers/Home.js";

const router = express.Router();

router.get("/", HomeControler);

export default router;
