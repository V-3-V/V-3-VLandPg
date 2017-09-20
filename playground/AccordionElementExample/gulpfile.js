const parseArgs =  require('minimist');

//  Command line:
//  gulp styles --src=styles.scss --dest=styles
var argv = parseArgs(process.argv);
const src=argv['src'];
const dest=argv['dest'];
if( !src || !dest ) {
    console.log("Source file OR destination directory not found");
    console.log("Example: gulp styles --src=styles.scss --dest=styles");
     return;
}
console.log(`Source : ${src}  Generate to destination directory : ${dest}`);


// GULP CSS Styles task
var gulp = require('gulp'),
  postcss = require('gulp-postcss'),   //  PostCSS plug-in
  autoprefixer = require('autoprefixer'),        // Autoprefixer plugin to PostCSS
  cssvars = require('postcss-simple-vars'),   // Variables in .css files
  nested = require('postcss-nested'),   // Nested CSS rules plug-in for PostCSS
  cssImport = require('postcss-import'),
  mixins = require('postcss-mixins'), // postcss-mixins module.
  hexrgba  = require('postcss-hexrgba');  // postcss converter hex to rgba()

//   GULP SCSS -> CSS styles conversion/processing
// Attnention! Does NOT  support SASS syntax.
gulp.task('styles', function() {
  // By the way, gulp.src() is asyncronus function
  return gulp.src(src) // source files
    .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        // postcss-simple-vars postcss-nested autoprefixer
    .on('error', function(errorInfo) { // stop interrupting work flow due to css errors
      console.log(errorInfo.toString());
      this.emit('end');  // gracefully finish the styles  task regardless of errors
    })
    .pipe(gulp.dest(dest)); // destination directory
});
