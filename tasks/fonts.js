'use strict';

import gulp        from 'gulp';
import fontmin     from 'gulp-fontmin';
import size        from 'gulp-filesize';

import * as config from '../../../../Users/Andrey/DEV-912/config'

export default () => {
    gulp.src(config.SRC_PATH + config.FONTS_PATH)
        .pipe(fontmin())
        .pipe(gulp.dest(config.PUBLIC_PATH + config.FONTS_PATH_PUBLIC))
        .pipe(size())
}