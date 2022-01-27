const express = require('express');
const router = express.Router();
const Image = require('../../models/Image');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

//GET /api/images
// Get image and save to database
router.get('/', async (req, res) => {
    const nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
    try {
        const response = await axios.get(nasaUrl);
        const { title, url } = response.data;
        const newImage = new Image({
            title,
            url
        });
        await newImage.save();
        return res.json(newImage);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
    
});

module.exports = router;