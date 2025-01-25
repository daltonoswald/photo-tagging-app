const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.index);

router.post('/game', indexController.game_post);

module.exports = router;