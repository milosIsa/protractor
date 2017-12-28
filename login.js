
var loginFunc = require('./functions');

LoginFunc = {
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
    }
  },

  loginGPTW: function() {

    elements.loginButton().click().then(function () {
    browser.getAllWindowHandles().then(function (handles) {
      var parentHandle = handles[0];
      var popUpHandle = handles[1];

        browser.switchTo().window(popUpHandle).then(function() {
          })
        })

  })

}
}

module.exports = LoginFunc;
