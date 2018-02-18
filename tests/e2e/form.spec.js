/*###########FORMSPEC###########
name:form.spec.js
author:aravind
description:methods to fill in all the data on the page and submit
###############################*/

describe('Testing Form', function() {

    var homepageObj = requirePO('home_page');//reference to home_page.js
        propreader = requirePro;
        EC = protractor.ExpectedConditions;//Expected conditions invoked to use explicit wait

      beforeEach(function(){

          browser.wait(EC.visibilityOf(element(by.cssContainingText('h3', 'Testing form'))),8000)//waiting for the homepage
      });

      it('should fill in all valid details and submit', function() {

            homepageObj.getElementByid(propreader.get('firstname')).sendKeys('Arawin');
            homepageObj.getElementByid(propreader.get('lastname')).sendKeys('R');
            homepageObj.getElementByname(propreader.get('email')).sendKeys('arw@gmail.com');
            homepageObj.getElementByid(propreader.get('mobile')).sendKeys('654654654');
            homepageObj.getElementByname(propreader.get('address')).sendKeys('BAKER STREET');
            homepageObj.getElementByname(propreader.get('suburb')).sendKeys('AMD');
            homepageObj.getElementByCss(propreader.get('state')).click();
            homepageObj.getElementByid(propreader.get('postcode')).sendKeys('6000');
            homepageObj.getElementByid(propreader.get('dob')).sendKeys('15/12/1987');
            homepageObj.getElementByClassName(propreader.get('checkbox')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, protractor.Key.SPACE));
            homepageObj.getElementByid(propreader.get('submit')).click();

      });

      it('successful message is displayed', function() {
            var confMsgTxt = propreader.get('confirmation msg')
                confMsg = element(by.cssContainingText('h2', confMsgTxt));//waiting for the confirmation page
            browser.wait(EC.visibilityOf(confMsg),8000)
            expect(confMsg.getText()).toBe(confMsgTxt);
       });


});


