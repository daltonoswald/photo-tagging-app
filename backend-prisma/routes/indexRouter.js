const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.index);

router.get('/leaderboard/:imageName', indexController.scores_get);

router.post('/game', indexController.game_post);

router.post('/score', indexController.score_post)

module.exports = router;