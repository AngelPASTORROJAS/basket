import express from "express";
import ArticleController from "../controllers/Article.js";
import HomeController from "../controllers/Home.js";

const router = express.Router();

router.get("/", HomeController);

router.get("/article/:id", ArticleController);

export default router;
