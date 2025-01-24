const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { format } = require('date-fns')

exports.index = asyncHandler(async (req, res) => {
    // res.render('index', { 
    //     title: 'Homepage', 
    //     user: req.user,
    // })
    const testMessage = 'Successfully connected'
    res.json({testMessage})
})