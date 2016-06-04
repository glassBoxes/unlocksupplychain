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
	var users;
  	res.render('skillmatch/search', { title: 'Express', users:users });
});

router.post('/search', function(req, res, next) {
	var search = req.body.search;
	console.log(search)
	var users = data.users;
	var categories = data.skills;
	users.forEach(function(user){
		var random = Math.floor(Math.random()*categories.length);
		var random1 = Math.floor(Math.random()*categories.length);
		var random2 = Math.floor(Math.random()*categories.length);

		var category1 = categories[random];
		var category2 = categories[random1];
		var category3 = categories[random2];
		user.skill = [,category1, category2, category3];

	});
  	res.render('skillmatch/search', { title: 'Express', users:users });
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
