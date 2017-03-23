'use strict';

import browserSync  from 'browser-sync';

import * as config from '../../../../Users/Andrey/DEV-912/config.js';

export default () => {
    browserSync.init({
        server: {
            baseDir: config.PUBLIC_PATH,
        },
        port: '3000',
        serveStatic: [config.SRC_PATH],
    });
}