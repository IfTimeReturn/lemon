var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var dbBase = "lemon";
var dbCall = "icon";
router.get('/addify', function(req, res, next) {
    mongodb.find(dbBase, dbCall, function(result) {
        res.send(result);
    })
})
module.exports = router;