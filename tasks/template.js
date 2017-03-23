'use strict';

import gulp         from 'gulp';
import jade         from 'gulp-jade';
import browserSync  from 'browser-sync';
import size         from 'gulp-filesize';

import * as config  from '../../../../Users/Andrey/DEV-912/config';

export default () => {
    gulp.src(config.SRC_PATH + config.JADE_PATH)
        .pipe(jade(
            {pretty: true}
        ))
        .pipe(gulp.dest(config.PUBLIC_PATH))
        .pipe(size())
        .pipe(browserSync.stream());

    gulp.watch(
        [ '*.jade' ],
        { cwd: config.PUBLIC_PATH },
        browserSync.reload
    );
}

