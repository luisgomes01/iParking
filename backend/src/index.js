import express from 'express'
import mongoose from 'mongoose';
import routes from './routes.js';

const PORT = process.env.PORT || 3333
const app = express()
app.use(express.json())
app.use(routes)

const uri = "mongodb+srv://root:root@cluster0.d0y5a.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true    
})

app.listen(PORT)