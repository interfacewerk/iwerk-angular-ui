// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const browserstack = require('browserstack-local');
const { SpecReporter } = require('jasmine-spec-reporter');


const BS_KEY = process.env.BS_KEY;
const BS_USER = process.env.BS_USER;
const BS_COMMON_CAPS = {
  'browserstack.user': BS_USER,
  'browserstack.key': BS_KEY,
  'browserstack.local': true
};

exports.config = {
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [{
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Chrome',
    'browser_version': '74.0',
    'resolution': '1920x1080',
    name: 'win10_chrome'
  }, {
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Edge',
    'browser_version': '18.0',
    'resolution': '1920x1080',
    name: 'win10_edge'
  }].map(c => ({
    ...c,
    ...BS_COMMON_CAPS
  })),
  // Code to start browserstack local before start of test
  beforeLaunch: async () => {
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': BS_KEY }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');
        resolve();
      });
    });
  },

  // Code to stop browserstack local after end of test
  afterLaunch: function(){
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    });
  },
  // directConnect: true,
  baseUrl: 'http://localhost:4301/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: 'e2e/tsconfig.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
