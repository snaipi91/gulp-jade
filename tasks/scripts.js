import gulp from 'gulp';
import browserSync  from 'browser-sync';
import * as config from '../config.js';

gulp.task('js', () => {
    return gulp.src(config.SRC_PATH + 'js/**/*.*')
        .pipe(gulp.dest(config.PUBLIC_PATH + 'js/'))
        .pipe(browserSync.stream());
});