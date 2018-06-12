const gulp = require('gulp')
const browserSync = require('browser-sync')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const uglify = require('gulp-uglify')
const cleanCSS = require('gulp-clean-css')

gulp.task('build', () => {
  return gulp.src('./source/**/*')
    .pipe(useref())
    .pipe(gulpif('*.min.css', cleanCSS()))
    .pipe(gulpif('*.min.js', uglify()))
    .pipe(gulp.dest('./build'))
})

gulp.task('browserSync', () => {
  return browserSync({
    server: {
      baseDir: './build'
    }
  })
})

gulp.task('reload', () => {
  return browserSync.reload()
})

gulp.task('watch', ['browserSync'], () => {
  return gulp.watch('./source/**/*', ['build', 'reload'])
})
