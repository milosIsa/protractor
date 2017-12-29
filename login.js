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
      element(by.css('#cred_sign_in_button'));
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

  loginGPTW: function() {

    elements.loginButton().click().then(function() {
      browser.getAllWindowHandles().then(function(handles) {
        var parentHandle = handles[0];
        var popUpHandle = handles[1];

        browser.switchTo().window(popUpHandle).then(function() {})
      })

    })

  },
  searchClient: function(clientName) {
    elements.searchClient().sendKeys(clientName);
  },
  clientListFun: function(clientName) {
    //let that = this;
    this.elements.searchClient().sendKeys(clientName);
    this.elements.searchClientButton().click();
    this.elements.clickClient(clientName).click();
  },

}

module.exports = LoginPage;
