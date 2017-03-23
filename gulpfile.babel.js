'use strict';

import gulp                 from 'gulp';

import bundleScript         from './tasks/scripts';
import bundleStyle          from './tasks/styles';
import bundleTemplate       from './tasks/template';
import compressFonts        from './tasks/fonts';
import watcher              from './tasks/watch';
import createPages          from './tasks/create';
import buildMedia           from './tasks/media';
import browserSync          from './tasks/sync';

gulp.task('js', bundleScript);
gulp.task('sass', bundleStyle);
gulp.task('jade', bundleTemplate);
gulp.task('fonts', compressFonts);
gulp.task('media', buildMedia);
gulp.task('watchers', watcher);
gulp.task('sync', browserSync);
gulp.task('create', createPages);

gulp.task(
    'default',
    [
        'watchers',
        'sass',
        'jade',
        // 'media',
        'js',
        'sync',
    ]
);