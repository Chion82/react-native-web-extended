const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const EXAMPLES_DIR = path.resolve('./examples');

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
    if (dir === 'build') {
      return entries;
    }

    const isDraft = dir.charAt(0) === '_';
    const isDirectory = fs.lstatSync(path.join(EXAMPLES_DIR, dir)).isDirectory();

    if (!isDraft && isDirectory) {
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');
    }

    return entries;
  }, {});
}

module.exports = {

  entry: buildEntries(),

  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: 'examples/__build__',
    publicPath: '/__build__/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('shared.js')
  ]

};
