const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
    value: {
        type: Number,
        max: 5,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    image: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Image',
        required: true
    }
});

const Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;


