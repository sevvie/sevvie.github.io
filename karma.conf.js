module.exports = function(c) {
  c.set({
    plugins: [
      'karma-browserify',
      'karma-source-map-support',
      'karma-jasmine',
      'karma-phantomjs-launcher'],
    basePath: '',
    frameworks: ['browserify', 'source-map-support', 'jasmine'],
    files: [
      'test/init.js',
      'test/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'test/init.js': ['browserify'],
      'test/**/*.spec.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: ['babelify']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: c.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false,
    concurrency: Infinity
  });
}
