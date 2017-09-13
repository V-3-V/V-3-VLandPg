module.exports = {
  entry: {  // Multi - entry points
    App: "./app/assets/scripts/App.js",
    Vendor: "./app/assets/scripts/Vendor.js"
  },
  output: {
    path: "./app/temp/scripts",
    filename: "[name].js" // Dynamc file name to accomodate multi entry points
  },
  // Already used to bundle-up JS
  // Now will be used also to convert JS by 'babel'
  module: {
    loaders: [  // list of loaders, used by webpack
      {
        loader: 'babel-loader',  // no longer allowed to omit -loader suffix
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,    // load .js file with babel
        exclude: /node_modules/  // exclude node_modules folder from babel's list
      }
    ]
  }
}
