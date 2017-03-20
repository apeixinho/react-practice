var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Endpoints', apiTitles: { protected: 'Protected Endpoint', signin: 'Signin Endpoint', signup: 'signup Endpoint' } });
});

module.exports = router;
