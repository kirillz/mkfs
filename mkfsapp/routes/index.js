var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* GET welcome page. */
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome Page' });
});
/* GET CGI page. */
router.get('/cgi', function(req, res, next) {
  res.render('cgi', { title: 'CGI Page' });
});
module.exports = router;
