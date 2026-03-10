import express from "express";

const app = express()
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello from News AI')
    res.end()
})


app.listen(PORT, () => {
    console.log(`Server running on PORT: ${PORT}`)
})