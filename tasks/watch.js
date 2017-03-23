import gulp from 'gulp';
import * as config from '../config.js';

export default () => {
    gulp.watch(config.SRC_PATH + config.ALL_SASS, ['sass']);
    gulp.watch(config.SRC_PATH + config.JADE_PATH, ['jade']);
    gulp.watch(config.SRC_PATH + config.JS_PATH, ['js']);
};