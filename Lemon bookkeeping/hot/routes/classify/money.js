var mongodb = require('mongodb-curd');
var dbBase = "lemon";
var dbCall = "money";
var classmoney = function(req, res, next) {
    console.log(req.body)
    var domes = req.body,
        name = domes.name,
        type = domes.type,
        uid = domes.uid;
    mongodb.find(dbBase, dbCall, {}, function(result) {
        res.send(result)
    })
}

module.exports = {
    Classmoney: classmoney
}