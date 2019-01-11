var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var users = require('./classify/user')
    /* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


//添加用户
router.post('/adduser', users.Classuser);

module.exports = router;