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
    console.log(imageName, targetChose, xPos, yPos);

    const imagePlayed = await prisma.image.findFirst({
        where: {
            image_name: imageName
        }
    })
    if (!imagePlayed) {
        res.json({ error: 'Image not found' });
    } else {
        console.log(imagePlayed);
        console.log('test', imagePlayed[targetChose+`_x_min`])
        const minCoordinateX = imagePlayed[targetChose+`_x_min`]
        const maxCoordinateX = imagePlayed[targetChose+`_x_max`]
        const minCoordinateY = imagePlayed[targetChose+`_y_min`]
        const maxCoordinateY = imagePlayed[targetChose+`_y_max`]
    }
})