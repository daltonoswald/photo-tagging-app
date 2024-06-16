const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const Image = require('../models/image');
const Score = require('../models/score');

exports.game_post = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {
        imageName, target, xPos, yPos
    } = req.body

    const imagePlayed = await Image.findOne({ imageName })

    if (!imagePlayed) {
        res.status(404).json({ error: 'Image not found' });
    } else {
        console.log(target, xPos, yPos);
    }
})