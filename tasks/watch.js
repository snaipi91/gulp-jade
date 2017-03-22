import gulp from 'gulp';
import browserSync  from 'browser-sync';
import * as config from '../config.js';

gulp.task('watchers', function() {
    gulp.watch(config.SRC_PATH + './**/*.scss', ['sass']);
    gulp.watch(config.SRC_PATH + 'templates/**/*.jade', ['jade']);
    gulp.watch(config.SRC_PATH + 'js/*', ['js']);
});