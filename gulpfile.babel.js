'use strict';

import gulp         from 'gulp';
import fs           from 'fs';
import path         from 'path';
import sass         from 'gulp-sass';
import jade         from 'gulp-jade';
import concat       from 'gulp-concat';
import browserSync  from 'browser-sync';
import imagemin     from 'imagemin';

import * as config from './config.js';

gulp.task('js', () => {
    return gulp.src(config.SRC_PATH + 'js/**/*.*')
            .pipe(gulp.dest(config.PUBLIC_PATH + 'js/'))
            .pipe(browserSync.stream());
});

gulp.task('sass', () => {
    return gulp.src(config.SRC_PATH + 'sass/index.scss')
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            // .pipe(autoprefixer({
            //     browsers: ['last 3 versions'],
            //     cascade: false
            // }))
            .pipe(concat('app.css'))
            .pipe(gulp.dest(config.PUBLIC_PATH + 'css'))
            .pipe(browserSync.stream());
});

gulp.task('directory', () => {
    gulp.src(config.SRC_PATH + 'fonts/**/*.*')
        .pipe(gulp.dest(config.PUBLIC_PATH + 'fonts/'));
    gulp.src(config.SRC_PATH + 'svg/**/*.*')
        .pipe(gulp.dest(config.PUBLIC_PATH + 'svg/'));
    gulp.src(config.SRC_PATH + 'img/**/*.*')
        .pipe(gulp.dest(config.PUBLIC_PATH + 'img/'));
});

gulp.task('media', () => {
    gulp.src(config.SRC_PATH + config.IMAGE_PATH)
        .pipe(imagemin())
        .pipe(gulp.dest(config.PUBLIC_PATH + 'img/'))
});

gulp.task('jade', () => {
    return gulp.src(config.SRC_PATH + 'templates/pages/*.jade')
            .pipe(jade(
                {pretty: true}
            ))
            .pipe(gulp.dest(config.PUBLIC_PATH))
            .pipe(browserSync.stream());
});

gulp.task('sync', () => {
    browserSync.init({
        server: {
            baseDir: config.PUBLIC_PATH
        },
        port: '3000',
        ghostMode: false,
        open: false,
        serveStatic: [config.SRC_PATH]
    });

    gulp.watch(
        [ '*.jade' ],
        { cwd: config.PUBLIC_PATH },
        browserSync.reload
    );
});

gulp.task('watchers', function() {
    gulp.watch(config.SRC_PATH + './**/*.scss', ['sass']);
    gulp.watch(config.SRC_PATH + 'templates/**/*.jade', ['jade']);
    gulp.watch(config.SRC_PATH + 'js/**/*.*', ['js']);
});

gulp.task('create', function () {
    fs.readdir(config.PUBLIC_PATH, function (err, data) {
        var html = '';

        if(err) throw err;

        for(var i = 0; i < data.length; i++) {

            if(path.extname(data[i]) == '.html') {
                html += '<h2 class="b-title-h2 b-title-h2__elem--margin"><a href="' + data[i] + '">' + data[i] + '</a></h2>';
                console.log("Create file " + data[i]);
            }

        }

        fs.writeFile(config.PUBLIC_PATH + 'index.html', html + '\n');

    })
});

gulp.task(
    'default',
    [
        'watchers',
        'sass',
        'directory',
        'jade',
        'js',
        'sync'
    ]
);