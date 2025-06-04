import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
const app = express()

const port = process.env.PORT || 4000


app.get('/', (req, res)=>{
    res.send("now we are ready")
})

app.get('/login', (req, res)=>{
    res.send("<h1>login here</h1>")
})


app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
})