import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './mongodb/connect.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.get('/', async (req, res) => {
    res.send('Hi There Designer!')
})

const startServer = async () =>{
    try{
        connectDb(process.env.MONGODB_URL)
        app.listen(5000, () => {
            console.log("Server started at port: 5000")
        })
    }
    catch(err){console.log(err)}
    
}

startServer()