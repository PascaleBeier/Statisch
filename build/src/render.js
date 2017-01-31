const fs = require('fs');
const path = require('path');
const options = require('./../config/pug');
const { pagesPath, publicPath } = require('./../config/path');
const pug = require('pug');


module.exports = function render (source) {
    fs.readdir(source, function (err, files) {
        files.forEach(function (file, index) {
            rendered = pug.renderFile(path.join(pagesPath, file), options);
            renamed = file.replace('.pug', '.html');
            fs.writeFile(path.join(publicPath, renamed), rendered);
        });
    });
}