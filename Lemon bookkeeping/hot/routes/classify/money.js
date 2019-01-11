var mongodb = require('mongodb-curd');
var dbBase = "lemon";
var dbCall = "money";
var classmoney = function(req, res, next) {
    console.log(req.body)
    var domes = req.body,
        name = domes.name,
        type = domes.type,
        uid = domes.uid;
    if (!name || !type || !uid) {
        res.send('信息内容不全!');
    } else {
        //判断集合是否存在所添加的信息
        mongodb.find(dbBase, dbCall, { name: name, type: type, uid: uid }, function(result) {
                if (result.length > 0) {
                    res.send({ code: 0, message: "内容信息已存在" });
                } else {
                    add();
                }
            })
            //封装添加方法
        function add() {
            mongodb.insert(dbBase, dbCall, { name: name, type: type, uid: uid }, function(result) {
                if (result) {
                    res.send({ code: 1, message: "添加成功" });
                } else {
                    res.send({ code: 0, message: "添加失败" });
                }
            })
        }
    }

}

module.exports = {
    Classmoney: classmoney
}