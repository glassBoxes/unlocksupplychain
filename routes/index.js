var express = require('express');
var data = require('../data/data-skillmatch.js')
var request = require('request')
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
	req.param('slack')
	var hasSlack = req.param('slack')
  	res.render('skillmatch/integrations', { title: 'Express', users:users,categories:categories,myskills:myskills,hasSlack:hasSlack });
});

router.get('/auth/slack', function(req, res, next) {
	var code = req.param('code');
	var url = 'https://slack.com/api/oauth.access';

        var postData = {
            "code": code,
            "client_id": '42172077798.48238370917',
            "client_secret": '058e5651cf1b469e2f783bf6c685f57a',
            "redirect_uri": 'https://hacktheoffice-winners.herokuapp.com/skillmatch/auth/slack'
        }
        
        url = url +'?client_id='+postData.client_id+'&client_secret='+postData.client_secret+'&code='+postData.code+'&redirect_uri='+postData.redirect_uri;
        
        var options = {
            method: 'post',
            url: url
        }
        
        request(options, function(err, r, body) {
            if (err) {
                return err 
            }
            res.redirect('/skillmatch/integration?slack=true')
        });

  	
});

module.exports = router;
