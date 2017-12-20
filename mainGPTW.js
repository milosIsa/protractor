var loginFunc = require('./functions');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.ignoreSynchronization = true;
    browser.get('https://dev-cmp.greatplacetowork.com');
    browser.driver.sleep(1000);

    var loginBtn = element(by.css('.new-login__login-button'));
    loginFunc.waitELe(loginBtn);
    element(by.css('.new-login__left.flexbox'))

    loginBtn.click();

    //  Now make sure that the new window is popping up and we are navigating   correctly to it
    var handlePromise = browser.driver.getAllWindowHandles();
    handlePromise.then(function(handles) {
      var parentHandle = handles[0];
      var popUpHandle = handles[1];

      // Change to new handle
      browser.driver.switchTo().window(popUpHandle);

      var popUpHandleFinal = browser.driver.getWindowHandle();
      expect(popUpHandleFinal).toEqual(popUpHandle);

      browser.getAllWindowHandles().then(function(handles) {
        browser.switchTo().window(popUpHandle).then(function() {
          var gptwLogin = element(by.css('.btn-default.ng-binding'))
          loginFunc.waitELe(gptwLogin);
          gptwLogin.click();

          var gptwLogin2 = element(by.css('#uxOptOutLink'))
          loginFunc.waitELe(gptwLogin2);
          gptwLogin2.click();

          var emailField = element(by.css('#cred_userid_inputtext'))
          loginFunc.waitELe(emailField);
          emailField.sendKeys('charliedev@greatplacetowork.com');
          element(by.css('#cred_sign_in_button')).click();

          var passField = element(by.css('#passwordInput'))
          loginFunc.waitELe(passField);
          passField.sendKeys('Ravine452!');
          element(by.css('#submitButton')).click();

        }).then(function(handles) {
          browser.switchTo().window(parentHandle).then(function() {
            browser.ignoreSynchronization = false;
            var clientList = element(by.css('#clientList'))
            //browser.wait(until.presenceOf(clientList), 10000, 'Element taking too long to appear in the DOM');
            loginFunc.waitELe(clientList);
            expect($('.header-heading').isDisplayed()).toBeTruthy()
            element(by.model('vm.meta.searchText')).sendKeys("Client Moz")
            var searchClient = element(by.css('.input-square-submit.p0'))

            loginFunc.waitELe(searchClient);
            searchClient.click();
            element(by.cssContainingText('.cell-content', 'Client Moz')).click();

          });

        })

      });

    });


  });

  it('should create survey', function() {
    browser.ignoreSynchronization = false;
    var projectDropDown = element(by.css('.relative.dropdown-toggle'))
    loginFunc.waitELe(projectDropDown)
    projectDropDown.click();
    var projectPicker = element(by.cssContainingText('.btn.p-.project-picker-item', 'Auto'))
    loginFunc.waitELe(projectPicker);
    projectPicker.click();

    var createSurvey = element(by.css('.pd-create-survey-btn'))
    loginFunc.waitELe(createSurvey);
    createSurvey.click();

    var inputSurveyName = element(by.model('vm.surveyData.Name'))
    loginFunc.waitELe(inputSurveyName);
    var d = new Date();

    inputSurveyName.sendKeys('auto' + d)
    browser.driver.sleep(2000);

  })
});
