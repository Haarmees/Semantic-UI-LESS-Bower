/**
 * Created by Jochem on 7-4-15.
 */
var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');


gulp.task('TASKNAME', function() {
    return gulp.src(mainBowerFiles())
        .pipe(/* what you want to do with the files */)
});
gulp.task('default', function() {
    // place code for your default task here
    var p = require('./../../package.json')
    console.log(p);
});