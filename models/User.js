const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: "Email is required",
        unique: "Must have a unique email"
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;