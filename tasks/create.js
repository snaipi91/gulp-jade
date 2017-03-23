'use strict';

import fs from 'fs';
import path from 'path';

import * as config from '../../../../Users/Andrey/DEV-912/config';

export default () => {
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
}