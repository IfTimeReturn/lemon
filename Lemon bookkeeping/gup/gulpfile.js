var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
    return gulp.src('./public')
        .pipe(webserver({
            port: 9090,
            open: true,
            proxies: [{
                source: "",
                target: ""
            }]
        }))

})