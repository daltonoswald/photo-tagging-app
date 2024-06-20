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
        imageName, targetChose, xPos, yPos
    } = req.body

    const imagePlayed = await Image.findOne({ imageName })

    if (!imagePlayed) {
        res.status(404).json({ error: 'Image not found' });
    } else {
        const target = imagePlayed.targets[targetChose];
        
        const targetNumberIndex = targetChose.slice(-1) - 1;
        console.log(targetChose);
        console.log(targetNumberIndex);

        const minCoordinateX = target.coordinateX.minCoordinate;
        const maxCoordinateX = target.coordinateX.maxCoordinate;
        const minCoordinateY = target.coordinateY.minCoordinate;
        const maxCoordinateY = target.coordinateY.maxCoordinate;
        console.log(xPos, yPos);
        console.log(minCoordinateX, maxCoordinateX, minCoordinateY, maxCoordinateY)
        if ((xPos >= minCoordinateX && xPos <= maxCoordinateX) && (yPos >= minCoordinateY && yPos <= maxCoordinateY)) {
            res.status(200).json({ 
                result: true, 
                targetNumberIndex,

             });
            // console.log(imagePlayed.imageName);
            // console.log('Your guess of ' + xPos + ' is between ' + minCoordinateX + ' and ' + maxCoordinateX);
            // conosle.log('Correct Guess')
        } else {
            res.status(200).json({ result: false, imagePlayed });
            console.log('Incorrect Guess');
        }
    }
})

exports.score_post = [
    body('username', 'Username must not be empty').trim().isLength({ min: 1, max: 25 }).escape(),

    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const {
                imageName, username, time, timestamp,
            } = req.body;

            const score = new Score({
                imageName,
                username,
                time,
                timestamp,
            });

            await score.save();
            res.status(200).json();
        } catch (error) {
            res.status(500).json({ error });
        }
    })
]