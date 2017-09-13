// GULP CSS Styles task
var gulp = require('gulp'),
  postcss = require('gulp-postcss'),   //  PostCSS plug-in
  autoprefixer = require('autoprefixer'),        // Autoprefixer plugin to PostCSS
  cssvars = require('postcss-simple-vars'),   // Variables in .css files
  nested = require('postcss-nested'),   // Nested CSS rules plug-in for PostCSS
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins'), // postcss-mixins module.
  hexrgba  = require('postcss-hexrgba');  // postcss converter hex to rgba()

//   GULP CSS styles conversion/processing
gulp.task('styles', function() {
  // console.log("POSTCSS to CSS file's!");
  // PostCSS attached to GULP work flow
  // pipes in gulp:  gulp.src(./main.css) -->  gulp.dest(./temp/main.css)
  // By the way, gulp.src() is asyncronus function
  return gulp.src('./app/assets/styles/styles.css') // source files
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))  // filter hook for POSTCSS to include
        // postcss-simple-vars postcss-nested autoprefixer
    .on('error', function(errorInfo) { // stop interrupting work flow due to css errors
      console.log(errorInfo.toString());
      this.emit('end');  // gracefully finish the styles  task regardless of errors
      // to keep browserSync running
    })
    .pipe(gulp.dest('./app/temp/styles')); // destination directory
});
