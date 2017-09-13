var gulp = require('gulp'),
    modernizr = require('gulp-modernizr');

// Build custom copy of moderizr to test only for features
//  we need to have in our app.
gulp.task('modernizr', function () {
  return gulp.src(['./app/assets/styles/**/*.css','./app/assets/**/*.js'])
        .pipe(modernizr({
            "options": [
                "setClasses"  // generate modernizr.js which tests client browser
                // for a features, we use in our applications  .css files
                // We modify gulp/templates/sprite.css template
                // to use class="no-svg" in .icon  css rule.  
            ]
        }))
        .pipe(gulp.dest('./app/temp/scripts'));
});
