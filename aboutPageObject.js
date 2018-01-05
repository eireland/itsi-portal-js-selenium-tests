var BaseObject = require('./webdriverBase');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;
var assert = require ('assert');

const   ABOUT_HEADER = {xpath: '//h3[contains(text(),"About the Innovative Technology")]'};


class AboutPageObject extends BaseObject {
  constructor() {
    global.this = super();
  }

  async verifyAboutPage() {
    await super.displayed(ABOUT_HEADER);
  }
}

module.exports = new AboutPageObject();
