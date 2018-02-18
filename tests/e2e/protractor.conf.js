exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
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
},

};