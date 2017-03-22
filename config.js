import * as fs from 'fs';

export const    PUBLIC_PATH = '../dist/',
                SRC_PATH = '../src/',
                SASS_PATH = SRC_PATH + 'sass/index.scss',
                CSS_RENDER_PATH = PUBLIC_PATH + 'css',
                JADE_PATH = '../templates/pages/*.jade',
                IMAGE_PATH = '../img/*';

export const pkg = JSON.parse(fs.readFileSync('./package.json', { encoding: 'utf-8' }));

// https://github.com/dmnsgn/gulp-frontend-boilerplate/blob/master/boilerplate/tasks/watch.js

