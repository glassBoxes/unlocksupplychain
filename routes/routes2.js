var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('serenity/index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
	var user = {name:"henry"}
  res.render('serenity/index', { title: 'Express'});
});


module.exports = router;
