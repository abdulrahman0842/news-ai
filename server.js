import express from "express";
import cors from 'cors'

const app = express()
const PORT = process.env.PORT;

// Middleware
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello from News AI')
    res.end()
})


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})