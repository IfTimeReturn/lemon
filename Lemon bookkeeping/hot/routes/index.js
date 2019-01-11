var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');

var ico = require('./classify/index')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/icon', ico.Classico);

module.exports = router;