const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;

// Copy All HTML files
gulp.task('copyHTML', () => {
  gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('copyCSS', () => {
  gulp.src('src/css/*.css').pipe(gulp.dest('dist/css'));
});

gulp.task('copyBAD', () => {
  gulp.src('src/buildadream/*').pipe(gulp.dest('dist/buildadream'));
});

gulp.task('copyHosting', () => {
  gulp.src('src/hosting/*').pipe(gulp.dest('dist/hosting'));
});

gulp.task('copyQuiz', () => {
  gulp.src('src/quiz/*').pipe(gulp.dest('dist/quiz'));
});

gulp.task('copyCalculator', () => {
  gulp.src('src/calculator/*').pipe(gulp.dest('dist/calculator'));
});

// Optimize Images
gulp.task('minIMG', () => {
  gulp
    .src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});

// Scripts
gulp.task('minJS', () => {
  gulp
    .src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task(
  'default',
  gulp.parallel([
    'copyHTML',
    'copyCSS',
    'copyBAD',
    'copyHosting',
    'copyQuiz',
    'copyCalculator',
    'minIMG',
    'minJS'
  ])
);

gulp.task('watch', () => {
  gulp.watch('src/js/*.js', ['minJS']);
  gulp.watch('src/img/*', ['minIMG']);
  gulp.watch('src/*.html', ['copyHTML']);
  gulp.watch('src/css/*.css', ['copyCSS']);
  gulp.watch('src/buildadream/*', ['copyBAD']);
  gulp.watch('src/hosting/*', ['copyHosting']);
  gulp.watch('src/quiz/*', ['copyQuiz']);
  gulp.watch('src/calculator/*', ['copyCalculator']);
});
