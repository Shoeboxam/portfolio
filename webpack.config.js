var path = require('path');

module.exports = {
  entry: './assets/portfolio/index.js',
  output: {
    path: path.resolve(__dirname, './portfolio/portfolio/static'),
    filename: 'app.bundle.js'
  }
};

