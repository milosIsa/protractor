describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.ignoreSynchronization=true;
    browser.get('https://dev-cmp.greatplacetowork.com');
    browser.driver.sleep(1000);
    var until = protractor.ExpectedConditions;
    var loginBtn = element(by.css('.new-login__login-button'));
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
        var gptwLogin = element(by.css('.btn.btn-default.ng-binding'))
        browser.wait(until.presenceOf(gptwLogin), 30000, 'Element taking too long to appear in the DOM');
        gptwLogin.click();
        //browser.waitForAngular();
        //browser.ignoreSynchronization=true;
        var gptwLogin2 = element(by.css('#uxOptOutLink'))
        browser.wait(until.presenceOf(gptwLogin2), 30000, 'Element taking too long to appear in the DOM');
        gptwLogin2.click();


        var emailField = element(by.css('#cred_userid_inputtext'))
        browser.wait(until.presenceOf(emailField), 30000, 'Element taking too long to appear in the DOM');
        emailField.sendKeys('charliedev@greatplacetowork.com');
        element(by.css('#cred_sign_in_button')).click();

        var passField = element(by.css('#passwordInput'))
        browser.wait(until.presenceOf(passField), 5000, 'Element taking too long to appear in the DOM');
        passField.sendKeys('Ravine452!');
        element(by.css('#submitButton')).click();
        browser.sleep(3000);




    }).then(function(handles){
      browser.switchTo().window(parentHandle).then(function(){
      var CreateClient = element(by.css('#clientList'))
      browser.wait(until.presenceOf(CreateClient), 5000, 'Element taking too long to appear in the DOM');
      //element(by.css('.col-xs-6.pl0'))

  });

  })

  });

});


});
});
