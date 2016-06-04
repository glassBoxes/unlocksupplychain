var express = require('express');
var data = require('../data/data-skillmatch.js')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var users = data.users;
	var categories = data.categories;
	var myskills = data.myskills;
  	res.render('skillmatch/index', { title: 'Express', users:users,categories:categories,myskills:myskills });
});

router.get('/search', function(req, res, next) {
	var users = data.users;
	var categories = data.categories;
	var myskills = data.myskills;
  	res.render('skillmatch/search', { title: 'Express', users:users,categories:categories,myskills:myskills });
});

router.get('/network', function(req, res, next) {
	var users = data.users;
	var categories = data.categories;
	var myskills = data.myskills;
  	res.render('skillmatch/network', { title: 'Express', users:users,categories:categories,myskills:myskills });
});

router.get('/integration', function(req, res, next) {
	var users = data.users;
	var categories = data.categories;
	var myskills = data.myskills;
  	res.render('skillmatch/integrations', { title: 'Express', users:users,categories:categories,myskills:myskills });
});

module.exports = router;
