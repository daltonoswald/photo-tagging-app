var express = require('express');
var router = express.Router();

const index_controlller = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/game', index_controlller.game_post);

module.exports = router;
