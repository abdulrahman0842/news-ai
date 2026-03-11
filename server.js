import express from "express";
import cors from 'cors'

import news from "./routes/news.js";
import connectDB from "./config/dbConnection.js";
const app = express()
const PORT = process.env.PORT;

//Connect DB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('NEWS-AI')
    res.end()
})
app.use('/api/news', news)

app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})