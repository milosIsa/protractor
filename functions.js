
LoginFunc = {
waitELe: function(arg) {
  var until = protractor.ExpectedConditions;
  browser.wait(until.presenceOf(arg), 30000, 'Element taking too long to appear in the DOM');
}
}

module.exports = LoginFunc;
