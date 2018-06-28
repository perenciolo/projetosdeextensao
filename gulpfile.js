var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function () {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'));

  // Axios
  gulp.src([
    './node_modules/axios/dist/**/*',
    './src/helpers/*',
  ]).pipe(gulp.dest('./vendor/axios'));

  // Vue
  gulp.src([
    './node_modules/vue/dist/**/*',
    '!./node_modules/vue/README.md'
  ]).pipe(gulp.dest('./vendor/vue'));

  // jQuery
  // gulp.src([
  //     './node_modules/jquery/dist/*',
  //     '!./node_modules/jquery/dist/core.js'
  //   ])
  //   .pipe(gulp.dest('./vendor/jquery'))


});

// Default task
gulp.task('default', ['vendor']);

// Configure the browserSync task
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['browserSync'], function () {
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
});