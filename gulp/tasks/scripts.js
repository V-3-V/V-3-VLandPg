// Webback automation file
// npm install webpack --save-dev
//
var gulp = require('gulp'),
  webpack = require('webpack');

// Intorduced 'modernizr' dependency to 'scripts' task, to make sure webpack
//  will pack most recent modernizr.js file to the bundle
gulp.task('scripts',['modernizr'], function(callback) { // run webpack module on the .config.js
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if( err ) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
