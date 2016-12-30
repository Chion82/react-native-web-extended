const fs = require('fs');
const path = require('path');
const REGEX_TEST = /-test\.js$/;

function findTests(dir) {
  let tests = [];
  fs.readdirSync(dir).forEach(function (file) {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      tests = tests.concat(findTests(file));
    } else if (REGEX_TEST.test(file)) {
      tests.push(file);
    }
  });
  return tests;
}

const tests = findTests(path.resolve('./lib'));

module.exports = function (config) {
  const conf = {
    basePath: '',

    frameworks: [ 'mocha' ],

    files: tests,

    preprocessors: {},

    reporters: [ 'dots' ],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: [ 'Chrome' ],

    captureTimeout: 60000,

    singleRun: false,

    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
          }
        ]
      }
    },

    webpackServer: {
      stats: {
        colors: true
      }
    }
  };

  tests.forEach(function (test) {
    conf.preprocessors[test] = [ 'webpack', 'sourcemap' ];
  });

  config.set(conf);
};
