var mongodb = require('mongodb-curd');
var dbBase = "lemon";
var dbCall = "user";
var classuser = function(req, res, next) {
    var data = req.body.user;
    mongodb.insert(dbBase, dbCall, { user: data }, function(result) {
        if (result) {
            res.send({ code: 0, message: "添加成功" });
        } else {
            res.send({ code: 1, message: "添加失败" });

        }
    })
}

module.exports = {
    Classuser: classuser
}