var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    return gulp.src('./public')
        .pipe(webserver({
            port: 9090,
            open: true,
            proxies: [{
                source: "/classify/addify",
                target: "http://192.168.0.24:3000/classify/addify"
            }, {
                source: "/money/money",
                target: "http://192.168.0.24:3000/money/money"
            }, {
                source: "/money/addmoney",
                target: "http://192.168.0.24:3000/money/addmoney"
            }, {
                source: "/billlist",
                target: "http://192.168.0.24:3000/billlist"
            }, {
                source: "/addbill",
                target: "http://192.168.0.24:3000/addbill"
            }]
        }))
})