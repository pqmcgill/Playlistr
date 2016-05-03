// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var nodemon = require('gulp-nodemon');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['client/**/*.js', 'server/server.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('client/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['client/**/*.js', 'node_modules/angular/**/*.js', 'node_modules/angular-ui-router/**/*.js', 'node_modules/bootstrap/**/*.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('start', function () {
  nodemon({
    script: 'server/server.js',
    ext: 'js html',
    env: { 'NODE_ENV': 'development' }
  })
})

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['server/server.js', 'client/**/*.js', 'client/**/*.html'], ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch', 'start']);
