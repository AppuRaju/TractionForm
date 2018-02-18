/*###########HOMEPAGE###########
name:home_page.js
author:aravind
description:protractor locator library with different locator methods
###############################*/

function home_page(){

     return{
        getElementByid:getElementByid,
        getElementByClassName:getElementByClassName,
        getElementByname:getElementByname,
        getElementByCss:getElementByCss
      }


    function getElementByid(id){

        return browser.driver.findElement(By.id(id));
    }

    function getElementByClassName(classname){

            return browser.driver.findElement(By.className(classname));
    }

    function getElementByname(name){

                return browser.driver.findElement(By.name(name));
    }


    function getElementByCss(cssLoc){

                return browser.driver.findElement(By.css(cssLoc));
    }

    option[value='ACT']


}

module.exports = home_page();