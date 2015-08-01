var gulp = require('gulp');
var browserSync = require('browser-sync');
var server = require('gulp-live-server');

gulp.task('test', function() {
    browserSync.init({
        notify: false,
        port: 8080,
        server: {
            baseDir: ["app", 'test'],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch(['app/**/*.*', 'test/**/*.*'])
        .on('change', browserSync.reload);
});

gulp.task('server', function() {
    var live = new server('server.js');
    live.start();
});

gulp.task('serve', ['server'], function() {
    browserSync.init({
        notify: false,
        port: 8082,
        server: {
            baseDir: ["app", "test"],
            routes: {
                '/bower_components': 'bower_components'
            }
        }
    });

    gulp.watch(['app/**/*.*', "test/**/*.*"])
        .on('change', browserSync.reload);
});
