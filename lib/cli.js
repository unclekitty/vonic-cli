var Cli = {};

var Q = require('q');

Cli.run = function run(processArgv) {
  return Q.all([
    Cli.doRuntimeCheck(),
    Cli.checkLatestVersion()
  ]).then(function() {
    Cli.runr(processArgv);
  }).catch(function(ex) {
    //return appLibUtils.fail(ex);
    console.log(ex);
  });
};

Cli.runr = function runr(processArgv) {
  console.log(processArgv);
};

Cli.doRuntimeCheck = function () {

  return Q();
};

Cli.checkLatestVersion = function () {
  return Q();
};

module.exports = Cli;
