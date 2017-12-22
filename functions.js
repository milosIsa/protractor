const timeout = 30000;

LoginFunc = {
waitELe: function(arg) {
  var until = protractor.ExpectedConditions;
  browser.wait(until.presenceOf(arg), timeout, 'Element taking too long to appear in the DOM');
}
}

module.exports = LoginFunc;
