var express = require('express');
var router = express.Router();
var mongodb = require('mongodb-curd');
var mys = require('./classify/money');
var dbBase = "lemon";
var dbCall = "money";

//查询分类
router.post('/money', mys.Classmoney);
router.post('/addmoney', function(req, res, next) {
    var data = req.body,
        name = data.name,
        type = data.type,
        uid = data.uid,
        icon = data.icon
    if (!name || !uid || !icon) {
        res.send('信息内容不全!');
    } else {
        //判断集合是否存在所添加的信息
        mongodb.find(dbBase, dbCall, { name: name, type: type, uid: uid, icon: icon }, function(result) {
                if (result.length > 0) {
                    res.send({ code: 0, message: "内容信息已存在" });
                } else {
                    add();
                }
            })
            //封装添加方法
        function add() {
            mongodb.insert(dbBase, dbCall, { name: name, type: type, uid: uid, icon: icon }, function(result) {
                if (result) {
                    res.send({ code: 1, message: "添加成功" });
                } else {
                    res.send({ code: 0, message: "添加失败" });
                }
            })
        }
    }
})

module.exports = router;