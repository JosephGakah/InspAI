import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import LogoModel from '../mongodb/models/logo.js';

dotenv.config();

const router = express.Router();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET
})

// Get logo
router.route('/').get(async (req, res) => {
    try {
        const logos = await LogoModel.find({})
        res.status(201).json({ success: true, data: logos })
    } catch (error) {
        res.status(500).json({ success: false, message: error})        
    }
})

// Create Logo
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body;
        const photoUrl = cloudinary.uploader.upload(photo)
        const newlogo = LogoModel.create({
            name,
            prompt,
            photo: await photoUrl.url
        })
        res.status(201).json({ success: true, data: newlogo })
    } catch (error) {
        res.status(500).json({ success: false, message: error})
    }
})

export default router;