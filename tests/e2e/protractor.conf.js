exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  browserName: 'chrome',
  specs: ['form.spec.js'],

  onPrepare:function(){

    browser.driver.manage().window().maximize();
    browser.driver.get('http://integr8a.trclient.com/testing/');
    browser.waitForAngularEnabled(false);

    global.requirePO = function (relativePath) {
        return require(__dirname + '/pages/' + relativePath + '.js');
    }
    var PropertiesReader  = require('properties-reader');
    //load property file to fetch the locator values using properties-reader
    global.requirePro = PropertiesReader (__dirname+'/locators.txt')

    var jasmineReporters = require('jasmine-reporters');


        // returning the promise makes protractor wait for the reporter config before executing tests
        return browser.getProcessedConfig().then(function(config) {
            // you could use other properties here if you want, such as platform and version
            var browserName = config.capabilities.browserName;

            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'testresults',
                filePrefix: browserName + '-xmloutput',

            });
            jasmine.getEnv().addReporter(junitReporter);
        });



  },


  //HTMLReport called once tests are finished
  onComplete: function() {
       var browserName, browserVersion;
       var capsPromise = browser.getCapabilities();

       capsPromise.then(function (caps) {
          browserName = caps.get('browserName');
          browserVersion = caps.get('version');

          var HTMLReport = require('protractor-html-reporter');

          testConfig = {
              reportTitle: 'Test Execution Report',
              outputPath: './testresults',
              //screenshotPath: './screenshots',
              testBrowser: browserName,
              browserVersion: browserVersion,
              modifiedSuiteName: false,
              screenshotsOnlyOnFailure: false
          };
          new HTMLReport().from('./testresults/'+browserName + '-xmloutput.xml', testConfig);
      });
   }


};