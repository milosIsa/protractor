var loginFunc = require('./functions');

LoginPage = {
  elements: {
    loginButton: function() {
      return element(by.css('.new-login__login-button'));
    },
    loginPage: function() {
      return element(by.css('.new-login__left.flexbox'));
    },
    loginGPTWButton: function() {
      return element(by.css('.btn-default.ng-binding'));
    },
    loginGPTWold: function() {
      return element(by.css('#uxOptOutLink'));
    },
    emailGPTW: function() {
      return element(by.css('#cred_userid_inputtext'));
    },
    signinGPTWfirst: function() {
      return element(by.css('#cred_sign_in_button'));
    },
    passGPTW: function() {
      return element(by.css('#passwordInput'));
    },
    submitLoginGPTW: function() {
      return element(by.css('#submitButton'));
    },
    clientList: function() {
      return element(by.css('#clientList'));
    },
    clientListHeader: function() {
      return element(by.css('.header-heading'));
    },
    searchClient: function() {
      return element(by.model('vm.meta.searchText'));
    },
    searchClientButton: function() {
      return element(by.css('.input-square-submit.p0'));
    },
    clickClient: function(name) {
      return element(by.cssContainingText('.cell-content', name))
    }
  },
  loginGPTW: function(username, pass) {

    let that = this;

    this.elements.loginButton().click().then(function() {
      browser.getAllWindowHandles().then(function(handles) {
        var parentHandle = handles[0];
        var popUpHandle = handles[1];

        browser.switchTo().window(popUpHandle).then(function() {
          browser.ignoreSynchronization = true;
          loginFunc.waitELe(that.elements.loginGPTWButton());
          that.elements.loginGPTWButton().click();
          loginFunc.waitELe(that.elements.loginGPTWold());
          that.elements.loginGPTWold().click();
          loginFunc.waitELe(that.elements.emailGPTW());
          that.elements.emailGPTW().sendKeys(username);
          that.elements.signinGPTWfirst().click();
          loginFunc.waitELe(that.elements.passGPTW());
          that.elements.passGPTW().sendKeys(pass);
          that.elements.submitLoginGPTW().click();



        }).then(function(handles) {
          browser.switchTo().window(parentHandle).then(function() {
            browser.ignoreSynchronization = false;
            loginFunc.waitELe(that.elements.clientList());
          });
        });

      });

    });
  },
  searchClient: function(clientName) {
    this.elements.searchClient().sendKeys(clientName);
  },
  clientListFun: function(clientName) {
    //let that = this;
    this.elements.searchClient().sendKeys(clientName);
    this.elements.searchClientButton().click();
    this.elements.clickClient(clientName).click();
  },

}

module.exports = LoginPage;
