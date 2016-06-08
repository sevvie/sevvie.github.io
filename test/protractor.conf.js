var fs = require('fs');
var path = require('path');
var httpServer = require('http-server');

startHttpServer();

exports.config = {
  baseUrl: 'http://localhost:8007',
  seleniumServerJar: findSelenium(),
  specs: [
    'test/**/*.e2e.js'
  ],
  useAllAngular2AppRoots: true
};

function startHttpServer() {
  var s = httpServer.createServer();
  s.listen(8007, function() {
    console.log("http-server started at localhost:8007.");
  });
}

function findSelenium() {
  var d = './node_modules/protractor/selenium';
  var f = fs.readdirSync(d);
  var jar = f.filter(function(fi) {
    return /\.jar$/.test(fi);
  })[0];

  if( !jar ) {
    console.error("Can't find the Selenium JAR. Run node_modules/.bin/webdriver-manager update.");
    process.exit(1);
  }

  return path.resolve(dir, jar);
}
