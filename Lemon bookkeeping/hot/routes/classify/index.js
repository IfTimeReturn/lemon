var mongodb = require('mongodb-curd');
var dbBase = "lemon";
var dbCall = "icon";
var classico = function(req, res, next) {
    mongodb.find(dbBase, dbCall, {}, function(result) {
        console.log(result);
        if (result.length > 0) {
            res.send({ code: 0, message: "渲染完成" });
        } else {
            res.send({ code: 1, message: "渲染失败" });
        }
    })
}

module.exports = {
    Classico: classico
}