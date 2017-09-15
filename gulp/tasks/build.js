// Build task to create minimized set of files  ready
//  for go alive in dist folder
//  Attention!!!
//  "gulp" tasks 'styles','scripts', 'icons'
//  are defined in the corresponding files of folder ./gulp/tasks
//

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    // Uglification of the production HTML, CSS, JS files
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),   // revision
    cssnano = require('gulp-cssnano'),  // CSS
    uglify = require('gulp-uglify'),  // JS
    // solely for preview task 'previewDist' of ./docs folder
    browserSync = require('browser-sync').create(); //  create() method from the package.

// browser preview task of the ./docs folder
gulp.task('previewDist', function() {
  // browserSync spins up a little server baseDir = ./dist
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });  // EOF browserSync

}); // EOF previewDist

// Miscellenius functions - tasks

gulp.task('deleteDistFolder',['icons'], function(){
  return del('./docs');
});

// copy misc files
gulp.task('copyGeneralFiles', function() {
  var pathToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src( pathToCopy )
    .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages',['deleteDistFolder'], function() {
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons',
                    '!./app/assets/images/icons/**/*']) //  (icons/**/* means folders, subfolders and all files )
          .pipe(imagemin({
            progressive: true, // .jpeg opimize
            interlaced: true,  // .gif optimize
            multipass: true  // .svg optimize
          })) //  npm install gulp-imagemin --save-dev
          .pipe(gulp.dest("./docs/assets/images"));
});

//
// Brand new task to streamline the build process
//

gulp.task('useminTrigger', ['deleteDistFolder'], function() {
  gulp.start("usemin");
});

// gulp-usemin npm package is looking for special comments
// in index.html file :-)

gulp.task('usemin',['styles','scripts'], function() {
  return gulp.src("./app/index.html")
      .pipe(usemin( { // Next step: tells usemin to revision and compress files
          css: [function() {return rev()}, function() {return cssnano()}],  // invoke tools to do something with CSS.
          js: [function() {return rev()}, function() {return uglify()}]  // invoke tools to do something with  JS files
        // Install npm for the files revision, CSS compress, JS compress
        //  npm install gulp-rev gulp-cssnano gulp-uglify --save-dev
      }))
      .pipe(gulp.dest("./docs"));
});

gulp.task('build',['deleteDistFolder','copyGeneralFiles',  'optimizeImages', 'useminTrigger']);  // gulp build run many tasks
