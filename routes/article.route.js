import express from "express";
import { getSources, getTopHeadlines } from "../controllers/newsController.js";

const router = express.Router();

router.get('/top-headlines', getTopHeadlines)
router.get('/sources', getSources)

export default router