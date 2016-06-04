var express = require('express');
var users = require('../data/data-skillmatch.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(users)
  res.render('skillmatch/index', { title: 'Express' });
});

module.exports = router;
