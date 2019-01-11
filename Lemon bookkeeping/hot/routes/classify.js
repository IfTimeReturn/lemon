var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var dbBase = "lemon";
var dbCall = "";
router.post('/addify', function(req, res, next) {
    mongodb.find()
})