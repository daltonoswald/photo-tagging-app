const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { format } = require('date-fns');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.index = asyncHandler(async (req, res) => {
    // res.render('index', { 
    //     title: 'Homepage', 
    //     user: req.user,
    // })
    const testMessage = 'Successfully connected'
    res.json({testMessage})
})

exports.game_post = asyncHandler(async (req, res, next) => {
    const {
        imageName, targetChose, xPos, yPos
    } = req.body;

    const imagePlayed = await prisma.image.findFirst({
        where: {
            image_name: imageName
        }
    })
    if (!imagePlayed) {
        res.json({ error: 'Image not found' });
    } else {
        const targetNumberIndex = targetChose.slice(-1) - 1;
        const minCoordinateX = imagePlayed[targetChose+`_x_min`]
        const maxCoordinateX = imagePlayed[targetChose+`_x_max`]
        const minCoordinateY = imagePlayed[targetChose+`_y_min`]
        const maxCoordinateY = imagePlayed[targetChose+`_y_max`]
        if ((xPos >= minCoordinateX && xPos <= maxCoordinateX) && (yPos >= minCoordinateY && yPos <= maxCoordinateY)) {
            res.status(200).json({ 
                result: true, 
                targetNumberIndex,
             });
        } else {
            res.status(200).json({ result: false, imagePlayed });
        }
    }
})

exports.scores_get = asyncHandler(async (req, res, next) => {
    try {
        const allScores = await prisma.score.findMany({
            where: {
                image_name: req.params.imageName
            },
            orderBy: {
                time: 'asc'
            }
        })
        if (!allScores) {
            res.status(204).json({ error: `Scores are not available` });
        } else {
            res.status(200).json(allScores)
        }
    } catch (err) {
        res.status(400).json({error: err})
    }
})

exports.score_post = [
    body('username', 'Username must not be empty').trim().isLength({ min: 1, max: 25 }).escape(),

    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json(400).json({ errors: errors.array() })
        }
        try {
            const {
                imageName, username, time, timestamp,
            } = req.body;
            const newScore = await prisma.score.create({
                data: {
                    image_name: imageName,
                    username: username,
                    time: time,
                    timestamp: timestamp
                }
            })
            res.status(200).json();
        } catch (error) {
            res.status(500).json({ error })
        }
    })
]