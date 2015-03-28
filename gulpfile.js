var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

// CONNECT
gulp.task('connect', function() {
  connect.server({
    root: 'dist/',
    livereload: true
  });
});

// SCSS
gulp.task('sass', function() {
  gulp.src('scss/styles.scss')
      .pipe(sass({errLogToConsole: true}))
      .pipe(gulp.dest('dist/css'))
      .pipe(livereload());
});

// WATCH
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('scss/{,*/}*.{scss,sass}', ['sass'])
  gulp.watch('./js/{,*/}*.js', ['concat-js']);
  gulp.watch('dist/*.html', ['html']);
  gulp.watch('dist/js/*.js', ['html']);
});

// HTML
gulp.task('html', function() {
    return gulp.src([
        'dist/index.html'
    ])
    .pipe(livereload());
});

// CONCAT JS
gulp.task('concat-js', function() {
  return gulp.src([
    'bower_components/d3/d3.js',
    'bower_components/c3js-chart/c3.js',
    'bower_components/jquery/dist/jquery.js',
    'js/main.js'
    ])
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload());
});

gulp.task('default', ['watch']);
gulp.task('serve', ['connect', 'watch']);