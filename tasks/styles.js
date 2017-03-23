'use strict';

import gulp         from 'gulp';
import sass         from 'gulp-sass';
import concat       from 'gulp-concat';
import browserSync  from 'browser-sync';
import size         from 'gulp-filesize';

import * as config from '../config.js';

export default () => {
     gulp.src(config.SASS_PATH)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // .pipe(autoprefixer({
        //     browsers: ['last 3 versions'],
        //     cascade: false
        // }))
        .pipe(concat('app.css'))
        .pipe(gulp.dest(config.PUBLIC_PATH + config.CSS_RENDER_PATH))
        .pipe(size())
        .pipe(browserSync.stream());
}