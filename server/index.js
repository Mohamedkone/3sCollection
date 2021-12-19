import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/post.js'

const app = express()

app.use('/post', postRoutes)

app.use(cors())
app.use(express.json())
app.use('/', routes)
app.use('*', (req, res) => res.status(404).json({error: "not found"}))


export default app

const CONNECTION_URL = 'mongodb+srv://Mohamedk:Luffy1999@cluster0.nlrdw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT =  process.env.PORT || 3001

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`server running on port: ${PORT}`)))
    .catch((error)=> console.log(error.message))
