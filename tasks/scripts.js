'use strict';

import gulp         from 'gulp';

import concat       from 'gulp-concat';
import uglify       from 'gulp-uglify';
import browserSync  from 'browser-sync';
import size         from 'gulp-filesize';

import * as config from '../config.js';

export default () => {
    gulp.src(config.SRC_PATH + config.JS_PATH)
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(config.PUBLIC_PATH + config.JS_PATH_PUBLIC))
        .pipe(size())
        .pipe(browserSync.stream());
};