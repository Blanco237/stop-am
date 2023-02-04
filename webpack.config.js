module.exports = {
    resolve: {
      fallback: { "path": require('path-browserify'), "fs" : require("browserify-fs") },
    },
  };