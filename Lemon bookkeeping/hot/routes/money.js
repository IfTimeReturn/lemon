var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var mys = require('./classify/money');
var dbBase = "lemon";
var dbCall = "money";

//查询分类
router.post('/money', mys.Classmoney);

module.exports = router;