const path = require('path');
const basePath = path.join(__dirname, '../../');
const resourcesPath = path.join(basePath, 'resources');
const viewsPath = path.join(resourcesPath, 'views');
const postsPath = path.join(viewsPath, 'posts');
const pagesPath = path.join(viewsPath, 'pages');
const publicPath = path.join(basePath, 'public');

module.exports = {
    basePath,
    pagesPath,
    publicPath
}