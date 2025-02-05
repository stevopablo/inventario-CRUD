const express = require('express')
const dotenv = require('dotenv')
const multer = require('multer')
const cors = require("cors")
dotenv.config()
const mongoose = require('mongoose')
const router = require('./src/Routes/InventarioRoutes')
const PORT = process.env.PORT || 3000
const app = express()


app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(router)

app.use('/uploads', express.static('uploads'))
app.get('/', (req, res)=>{
    res.status(200).send({msg: "Hello World"})
})

mongoose.connect(process.env.MONGO_URL, {})
        .then(() => console.log('Conected with Mongo'))
        .catch(err => console.log(`${err}`))

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})