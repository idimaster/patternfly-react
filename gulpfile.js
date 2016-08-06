const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function() {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(babel())
        .pipe(gulp.dest('lib'));
});
