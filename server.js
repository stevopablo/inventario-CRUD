const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res)=>{
    res.status(200).send({msg: "Hello World"})
})

mongoose.connect(process.env.MONGO_URL, {})
        .then(() => console.log('Conected with Mongo'))
        .catch(err => console.log(`${err}`))

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})