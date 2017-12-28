const timeout = 30000;

LoginFunc = {
  waitELe: function(arg) {
    var until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(arg), timeout, 'Element taking too long to appear in the DOM');

  },

  elements: {
    loginButton: function() {
      return element(by.css('.new-login__login-button'))
    },

    statCount: function() {
      return element.all(by.css('.overview-wrap__value.display-table > div > p')).get(0);
    },
     expStatCount: function(text) {
      expect(statCount().getText()).toEqual(text);
     }
  }


}

module.exports = LoginFunc;
