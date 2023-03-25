import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

router.route('/').get((req, res) => {
    res.send('Hello from Dall-e')
    console.log('DALL-E')
})

router.route('/').get(async (req, res) =>{
    try {
        const prompt = req.body;
        const aiRespose = await openai.createImage({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        })
        const image = aiRespose.data.data[0].b64_json;
        res.status(400).json({image: image})        
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response.data.error.message)
    }
})
export default router;