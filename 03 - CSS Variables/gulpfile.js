const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', ['watch'], function() {
  return browserSync.init({ server:  { baseDir: './src' } });
});

gulp.task('watch', function() {
  return gulp.watch('./src/**/*', ['refresh']);
});

gulp.task('refresh', function() {
  return browserSync.reload();
});
