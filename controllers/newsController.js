import asyncHandler from "express-async-handler";
import * as articleService from "../services/articleService.js";

export const getTopHeadlines = asyncHandler(async (req, res, next) => {
    const { category, country, query, sources } = req.query;

    const data = await articleService.getTopHeadlines({ category, country, query, sources });
    res.status(200).json(data)

})

