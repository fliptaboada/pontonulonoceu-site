var gulp = require('gulp');
var browserSync = require('browser-sync');

var PATHS = {};

PATHS.SRC = './';
PATHS.SRC_STYLES = './assets/styles';

gulp.task('browser-sync', function() {
  browserSync.init({
    serveStatic: [PATHS.SRC],
  });
});

gulp.task('static-files', function() {
  return gulp.src(PATHS.SRC)
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch(PATHS.SRC + '/**/*.*', ['static-files']);
});

gulp.task('serve', ['static-files', 'browser-sync', 'watch']);
