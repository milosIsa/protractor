
var loginFunc = require('./functions');

browser.driver.manage().window().maximize();

describe('Survey creation', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = false;
  });
  it('login GPTW user', function() {

    browser.get('https://dev-cmp.greatplacetowork.com');

    //var loginBtn = element(by.css('.new-login__login-button'))
    loginFunc.waitELe(loginFunc.elements.loginButton());
    //loginFunc.waitELe(loginBtn)
    element(by.css('.new-login__left.flexbox'));

    //  Now make sure that the new window is popping up and we are navigating   correctly to it

    loginFunc.elements.loginButton().click().then(function() {
      browser.getAllWindowHandles().then(function(handles) {

        // var handlePromise = browser.driver.getAllWindowHandles();
        // handlePromise.then(function(handles) {
        var parentHandle = handles[0];
        var popUpHandle = handles[1];

        // Change to new handle
        //browser.driver.switchTo().window(popUpHandle);

        // var popUpHandleFinal = browser.driver.getWindowHandle();
        // expect(popUpHandleFinal).toEqual(popUpHandle);

        browser.getAllWindowHandles().then(function(handles) {
          browser.switchTo().window(popUpHandle).then(function() {
            browser.ignoreSynchronization = true;
            var gptwLogin = element(by.css('.btn-default.ng-binding'));
            loginFunc.waitELe(gptwLogin);
            gptwLogin.click();

            var gptwLogin2 = element(by.css('#uxOptOutLink'));
            loginFunc.waitELe(gptwLogin2);
            gptwLogin2.click();

            var emailField = element(by.css('#cred_userid_inputtext'));
            loginFunc.waitELe(emailField);
            emailField.sendKeys('charliedev@greatplacetowork.com');
            element(by.css('#cred_sign_in_button')).click();

            var passField = element(by.css('#passwordInput'));
            loginFunc.waitELe(passField);
            passField.sendKeys('Ravine452!');
            element(by.css('#submitButton')).click();

          }).then(function(handles) {
            browser.switchTo().window(parentHandle).then(function() {
              browser.ignoreSynchronization = false;
              var clientList = element(by.css('#clientList'));
              //
              loginFunc.waitELe(clientList);

            });

          });

        });

      });
    });


  });
  //browser.ignoreSynchronization = false;
  it('Choose client', function() {
    // var clientList = element(by.css('#clientList'));
    //
    // loginFunc.waitELe(clientList);
    expect($('.header-heading').isDisplayed()).toBeTruthy();
    element(by.model('vm.meta.searchText')).sendKeys("Client Moz");
    var searchClient = element(by.css('.input-square-submit.p0'));

    loginFunc.waitELe(searchClient);
    searchClient.click();
    element(by.cssContainingText('.cell-content', 'Client Moz')).click();
  })

  it('should create survey', function() {
    //browser.ignoreSynchronization = false;
    var projectDropDown = element(by.css('.relative.dropdown-toggle'));
    loginFunc.waitELe(projectDropDown);
    projectDropDown.click();
    var projectPicker = element(by.cssContainingText('.btn.p-.project-picker-item', 'Auto New'));
    loginFunc.waitELe(projectPicker);
    projectPicker.click();

    var createSurvey = element(by.css('.pd-create-survey-btn'));
    loginFunc.waitELe(createSurvey);
    createSurvey.click();

    var inputSurveyName = element(by.model('vm.surveyData.Name'));
    loginFunc.waitELe(inputSurveyName);
    var d = new Date();

    inputSurveyName.sendKeys('AUTO ' + d);
    element(by.css('#culture-project-start-next-btn')).click();

    element(by.css('#culture-project-category-Community-btn')).click();

    element(by.css('#culture-project-category-Hospitality-btn')).click();

    element(by.css('#culture-project-category-Integrity-btn')).click();

    //button - go to next page from step 2 to step 3
    element(by.css('#culture-project-categories-next-btn')).click();

  });
  it('Design page', function() {

    // var designPage = element(by.css('.design-page'))
    // loginFunc.waitELe(designPage);

    expect($('.design-page').isDisplayed()).toBeTruthy()

    var ExpCon = protractor.ExpectedConditions;
    // Waits for the element with class 'testing-st-overview design-single-overview__value.mr--' to contain the text '10'.
    browser.wait(ExpCon.textToBePresentInElement($('.testing-st-overview.design-single-overview__value.mr--'), '10'));

    element(by.css('#survey-design-category-item-demographics-button-add')).click();

    element(by.cssContainingText('.tab-nav__item', 'Recommended')).click();

    var firstDemo = element.all(by.className('test-checkbox-label')).get(0);
    //loginFunc.waitELe(firstDemo);
    firstDemo.click();

    var tenthDemo = element.all(by.className('test-checkbox-label')).get(10);
    tenthDemo.click();

    var fourthDemo = element.all(by.className('test-checkbox-label')).get(4);
    fourthDemo.click();

    element(by.css('#add-demo-modal-add-btn')).click();

  });

  it('Add open-ended Q and manage date', function() {

    var designPage = element(by.css('.design-page'));
    loginFunc.waitELe(designPage);

    element(by.css('#survey-design-category-item-openended-button-add')).click();

    element(by.cssContainingText('.tab-nav__item', 'Recommended')).click();

    var firstOE = element.all(by.className('test-checkbox-label')).get(0);
    firstOE.click();

    element(by.css('#add-oe-modal-add-btn')).click();

    var manageDate = element(by.css('#survey-design-schedule-manage-btn'));
    loginFunc.waitELe(manageDate);
    manageDate.click();

    element(by.css('#schedule-modal-calendar-start-today')).click();
    element(by.css('#schedule-modal-calendar-own-emails')).click();
    element(by.css('#schedule-modal-save-btn')).click();



  });

  it('add language', function() {

    var language = element(by.css('#survey-design-languages-manage-btn'));
    loginFunc.waitELe(language);
    language.click();

    //var spanish = element(by.cssContainingText('.btn--shadow.modal-language-list__button', 'Spanish'))

    var spanish = element.all(by.css('.btn--shadow.modal-language-list__button')).get(2);

    spanish.click();
    element(by.css('.testing-translation-save-btn')).click();


    var nextPage = element(by.css('#culture-project-survey-design-next-btn'))
    loginFunc.waitELe(nextPage);
    nextPage.click();

  })

  it('4th and 5th step', function() {



    expect($('.linkDistribution.wrapper').isDisplayed()).toBeTruthy();
    //var peopleAndDemogpraphics = element(by.css('.middle-main'));
    //loginFunc.waitELe(peopleAndDemogpraphics);

    element(by.css('#people')).sendKeys('10');

    element(by.css('#culture-project-link-dist-next-btn')).click();

    var reviewAndLaunch = element(by.css('.col-sm-12.m0.ph0'));
    loginFunc.waitELe(reviewAndLaunch);
    //var statCount = element.all(by.css('.overview-wrap__value.display-table > div > p')).get(0);
    var demoCount = element.all(by.css('.overview-wrap__value.display-table > div > p')).get(1);
    var oaqCount = element.all(by.css('.overview-wrap__value.display-table > div > p')).get(2);

    // statCount.getText().then(function(text) {
    //       console.log(text);
    //
    //
    //   });



    loginFunc.elements.expStatCount('11 Statements');

    //expect(statCount.getText()).toEqual('10 Statements');
    expect(demoCount.getText()).toEqual('3 On-Survey Demographic Questions');
    expect(oaqCount.getText()).toEqual('1 Open-Ended Question');

    element(by.css('#review-launch-launch-btn')).click();

  })

  it('Participation and results', function() {

    expect($('.wrapper.survey-participation-monitor.pt0').isDisplayed()).toBeTruthy();
    var participation = element(by.css('.wrapper.survey-participation-monitor.pt0'));
    loginFunc.waitELe(participation);

    var closeSurvey = element(by.css('.btn.btn--rounded.negative-btn.pull-right'));
    closeSurvey.click();

    var confirmClose = element(by.css('.btn--blue'));
    confirmClose.click();

    var results = element(by.css('.pt140'));
    loginFunc.waitELe(results);
    //expect($('.pt140').isDisplayed()).toBeTruthy();

    element(by.css('.sidemenu-back-link')).click();

    expect($('.dashboard-page').isDisplayed()).toBeTruthy();


  })
});
