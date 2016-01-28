var gulp = require('gulp');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var babelify = require('babelify');
var path = require('path');
var watchify = require('watchify');
var globify = require('require-globify');

var paths = {
    OUT: '../dist/bundle.js',
    DEST_SRC: 'public/js',
    ENTRY_POINT: 'public/app.js'
};

var handleErrors = function() {
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
    this.emit('end'); // Keep gulp from hanging on this task
};

var time = function () {
    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hour = date.getHours();
    var timeString = [hour, minutes, seconds].join(':');
    return '[' + timeString + ']';
};

gulp.task('watch-js', function () {
    var watcher = watchify(browserify(paths.ENTRY_POINT, {
        transform: [babelify, globify], // Transform from JSX+ES6 to JS/ES5
        debug: true, // Use source maps
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function rebundle() {
        return watcher.bundle()
            .on('error', handleErrors)
            .pipe(source(paths.OUT))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(paths.DEST_SRC))
            .on('end', function () {
                console.log(time(), 'Re-built JS ' + paths.OUT);
            });
    }

    watcher.on('update', function() {
        rebundle();
    });

    rebundle();
});

gulp.task('default', ['watch-js']);