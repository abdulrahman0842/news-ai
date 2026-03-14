import express from "express";
import cors from 'cors'

import articles from "./routes/article.route.js";
import { subscribeToNewsApi } from "./services/cronJobService.js";
import connectDB from "./config/dbConnection.js";
const app = express()
const PORT = process.env.PORT;

//Connect DB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    subscribeToNewsApi();
    res.send('NEWS-AI')
    res.end()
})
app.use('/api/articles', articles)

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})