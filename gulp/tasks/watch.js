// Gulp watch task
var gulp = require('gulp'),
    watch = require('gulp-watch'),     // watch  plug-in
    browserSync = require('browser-sync').create(); // Only create() method from the package.

// "gulp watch"  command to watch for HTML,CSS files modifications
gulp.task('watch', function() {

  // browserSync spins up a little server
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  // trigger task "html"  when ./app/index.html changed
    watch('./app/index.html', function(){
      // dummy task "gulp.start('html');" has been removed.
      // reload browserSync, whenever index.html changed
      browserSync.reload();
    });
    // trigger task "styles"  when a /styles/**/*.css file(s)  changed
    watch('./app/assets/styles/**/*.css', function(){
       // gulp.start('styles');
       gulp.start('cssInject');
    });
    // trigger task scripts when script file modified
    watch('./app/assets/scripts/**/*.js', function() {
      gulp.start('scriptsRefresh'); // webpack then broserfy
    });
});

// Browser-sync injection of CSS upon change of tmp/styles/styles.css
gulp.task('cssInject', ['styles'] , function(){
  // Inject new CSS content "on the fly"
  return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
});
//  Wait for gulp.task('scripts', ) to completed, then reload browsers
 gulp.task('scriptsRefresh',['scripts'], function() {
  browserSync.reload();
});
