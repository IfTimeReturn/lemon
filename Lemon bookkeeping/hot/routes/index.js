var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var dbbase = "lemon";
var dbcall = "billlist";
var ico = require('./classify/index')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
//icon图标
router.post('/icon', ico.Classico);

//账单数据库集合  
router.get('/billlist', function(req, res, next) {
    mongodb.find(dbbase, dbcall, {}, function(result) {
        if (result.length > 0) {
            res.send({
                code: 1,
                message: result
            });
        } else {
            res.send({
                code: 0,
                message: "查询数据失败"
            })
        }
    });
})

router.post('/addbill', function(req, res, next) {
    var date = req.body,
        name = date.name,
        type = date.type,
        uid = date.uid,
        icon = date.icon,
        cid = date.cid;
    date.time = new Date(date.time);
    console.log(req.body);
    mongodb.insert(dbbase, dbcall, date, function(result) {
        if (result) {
            res.send({
                code: 1,
                message: result
            });
        } else {
            res.send({
                code: 0,
                message: "查询数据失败"
            })
        }
    });
})

module.exports = router;