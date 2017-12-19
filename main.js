describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('https://dev-cmp.greatplacetowork.com');
    //browser.ignoreSynchronization=true;
    var until = protractor.ExpectedConditions;
    var loginBtn = element(by.css('.btn.btn--primary.btn--rounded.new-login__login-button'))
    browser.wait(until.presenceOf(loginBtn), 30000, 'Element taking too long to appear in the DOM');

    loginBtn.click();

    // var webdriver = require('selenium-webdriver');
    //
    // var driver = new webdriver.Builder().
    //     withCapabilities(webdriver.Capabilities.chrome()).
    //     build();

//  Now make sure that the new window is popping up and we are navigating   correctly to it
      var handlePromise = browser.driver.getAllWindowHandles();
      handlePromise.then(function (handles) {
        var parentHandle = handles[0];
        var popUpHandle = handles[1];

        // Change to new handle
        browser.driver.switchTo().window(popUpHandle);

        var popUpHandleFinal = browser.driver.getWindowHandle();
        expect(popUpHandleFinal).toEqual(popUpHandle);

    browser.getAllWindowHandles().then(function(handles){
    browser.switchTo().window(popUpHandle).then(function(){
        element(by.model('model.username')).sendKeys('milos.isailovic+1154@htecgroup.com')
        element(by.model('model.password')).sendKeys('Gelictramp6!')
        element(by.css('.btn.btn-primary')).click()
        browser.driver.sleep(1000);
        browser.waitForAngular();

    }).then(function(handles){
      browser.switchTo().window(parentHandle).then(function(){
      var dash = element(by.css('.col-xs-6.pl0'))
      browser.wait(until.presenceOf(dash), 30000, 'Element taking too long to appear in the DOM');
      //element(by.css('.col-xs-6.pl0'))
      element(by.css('.col-xs-6.pr0'))
      //element(by.css('.pd-create-survey-btn')).click()
  });


  });
  });

});


});


});
