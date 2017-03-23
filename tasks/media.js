'use strict';

import gulp from 'gulp';
import imagemin from 'imagemin';

import * as config from '../../../../Users/Andrey/DEV-912/config';

export default () => {
    gulp.src(config.SRC_PATH + config.IMAGE_PATH)
        .pipe(imagemin())
        .pipe(gulp.dest(config.PUBLIC_PATH + config.IMAGE_PATH_PUBLIC))
}