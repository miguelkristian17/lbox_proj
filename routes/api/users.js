const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const User = require('../../models/User');

// POST /api/users
// Creates a new user
router.post("/",async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({email});
        
        if (user) {
            return res.json({"errors": [{"msg": "User already exists"}]});
        } else {
            const newUser = new User({email});
            await newUser.save();
            return res.json({"msg": "User created"});
        }
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

// DELETE /api/users/:id
// Deletes a user
router.delete("/:id",async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        await user.remove();
        return res.json({"msg": "User deleted"});
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
    }
});

module.exports = router;