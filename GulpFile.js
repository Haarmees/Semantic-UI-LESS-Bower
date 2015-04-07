/**
 * Created by Jochem on 7-4-15.
 */
var gulp = require('gulp');
var gutil = require('gulp-util');


gulp.task('init', function() {
    // place code for your default task here
    var p = require('./../../package.json')
    var inject = '@import ' + '"../../' + p.config.semantic + 'semantic.config"; @import "theme.less";';
    console.log(inject);
    return string_src("theme.config", inject)
        .pipe(gulp.dest(''))

});

function string_src(filename, string) {
    var src = require('stream').Readable({ objectMode: true })
    src._read = function () {
        this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }))
        this.push(null)
    }
    return src
}