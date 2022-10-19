import express from "express";
import {DisplayArticle, SubmitCommentaire} from "../controllers/Article.js";
import HomeController from "../controllers/Home.js";

const router = express.Router();

router.get("/", HomeController);

router.get("/article/:id", DisplayArticle);
router.post("/article/:id", SubmitCommentaire);


export default router;
