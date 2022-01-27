const express = require('express');
const router = express.Router();
const Rating = require('../../models/Rating');

// @route POST api/ratings
// @desc Create a rating for an image
router.post('/', async (req, res) => {
    const { image, user, value } = req.body;
    try {
        const newRating = new Rating({
            image,
            user,
            value,
        });
        await newRating.save();
        return res.json(newRating);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
});

// @route GET api/ratings/user/:userId
// @desc Get all ratings for a user
router.get('/user/:userId', async (req, res) => {
    const { userId } = req.params;
    console.log(userId);
    try {
        const ratings = await Rating.find({ user: userId });
        return res.json(ratings);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
});

// @route PUT api/ratings/:id
// @desc Update a rating
router.put('/:ratingId', async (req, res) => {
    const { ratingId } = req.params;
    const { value } = req.body; 
    try {
        const rating = await Rating.findById(ratingId);
        if (!rating) {
            return res.status(404).send("Rating not found");
        }
        rating.value = value;
        await rating.save();
        return res.json(rating);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
});

// @route DELETE api/ratings/:id
// @desc Delete a rating
router.delete('/:ratingId', async (req, res) => {
    const { ratingId } = req.params;
    try {
        const rating = await Rating.findById(ratingId);
        if (!rating) {
            return res.status(404).send("Rating not found");
        }
        await rating.remove();
        return res.json({"msg": "Rating deleted"});
    } catch (error) {
        console.error(error);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;