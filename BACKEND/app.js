import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'

const app = express();
dotenv.config({
    path : './env'
})


app.use(cors());

app.get('/', (req , res) => {
    res.send("Hello World");
})

export {app}