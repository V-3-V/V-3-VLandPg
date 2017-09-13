require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
// Integrate webpack into gulp automation
// We prefer not to use webpack features in this
// particular case, because heavily invested in gulp auto.
require('./gulp/tasks/scripts'); // Babel is not here, because it is invoked as loader in webpack.config.js

// Moderizr for client browser features set testing.
// the modernizr.js adds class to <html> tag: <html class=" svg">
//  it means that client's browser supports SVG sprite,
// and no need to download and use .png file for icons.
require('./gulp/tasks/modernizr');
// Build task
require('./gulp/tasks/build');
