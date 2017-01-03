var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('sass', function() {
    return gulp.src('./scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./compiled'));
});

gulp.task('default', ['sass'], function() {
    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./scss/_*.scss', ['sass']);
    gulp.watch('./scss/**/*.scss', ['sass']);
});
