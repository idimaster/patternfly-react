const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const merge = require('merge2')
const sourcemaps = require('gulp-sourcemaps');

const tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function() {
    const result = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));

    return merge([
        result.dts.pipe(gulp.dest('dist/definitions')),
        result.js.pipe(babel())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/js'))
    ]);
});
