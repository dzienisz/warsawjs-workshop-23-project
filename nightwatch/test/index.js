module.exports = {
  'First test' : function (browser) {
    browser
      .url('https://www.google.com')
      .waitForElementVisible('input[name=q]', 3000)
      .saveScreenshot('google-nightwatch.png')
      .end();
  }
};
