import * as fs from 'fs';

export const    PUBLIC_PATH     = './dist/',
    SRC_PATH        = './src/',

/* src path */
    ALL_SASS        = '**/*.sass',
    SASS_PATH       = SRC_PATH + 'sass/index.scss',
    JADE_PATH       = 'templates/pages/*.jade',
    JS_PATH         = 'js/**/*.js',
    IMAGE_PATH      = 'img/*',
    FONTS_PATH       = 'fonts/**/*',

/* public path */

    CSS_RENDER_PATH = 'css/',
    IMAGE_PATH_PUBLIC  = 'img/',
    JS_PATH_PUBLIC     = 'js/',
    FONTS_PATH_PUBLIC  = 'fonts/';

export const pkg = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));