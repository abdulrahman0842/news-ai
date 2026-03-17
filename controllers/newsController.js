import asyncHandler from "express-async-handler";
import ArticleModel from "../models/articleModel.js"
import * as articleService from "../services/articleService.js"
export const getTopHeadlines = asyncHandler(async (req, res, next) => {
    const { category, country, q, sources } = req.query;
    const dbQuery = {}
    if (category) {
        dbQuery.category = category
    }
    if (country) {
        dbQuery.country = country
    }
    if (q) {
        dbQuery.q = q
    }
    if (sources) {
        dbQuery = {
            source: { id: sources }
        }
    }

    console.log(dbQuery)

    const data = await ArticleModel.find(dbQuery)
    res.status(200).json(data)
})



export const getSources = asyncHandler(async (req, res) => {
    const data = await articleService.getSources()
    res.send(data)
    res.end()
})