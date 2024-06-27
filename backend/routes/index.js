var express = require('express');
var router = express.Router();

const index_controller = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/leaderboard/:imageName', index_controller.score_get);

router.post('/game', index_controller.game_post);

router.post('/score', index_controller.score_post);

module.exports = router;
