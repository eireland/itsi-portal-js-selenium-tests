var BaseObject = require('./webdriverBase');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

const
  LOGIN_MODAL = {id: 'login-default-modal'},
LOGIN_MODAL_HEADER = {css: '#login-default-modal > div > form > h2 > strong'},
LOGIN_SUBMIT_BUTTON = {css: '.login-default-modal-content > .signup-form > .submit-button-container > .submit-btn'},
LOGIN_MODAL_GOOGLE_OPTION = {id: 'google'},
LOGIN_MODAL_SCHOOLOGY_OPTION = {id: 'schoology'},
LOGIN_MODAL_FORGOT_PASSWORD = {xpath: "#login-default-modal > div > form > div.submit-button-container > a"},
USERNAME = {xpath: '//div[contains(@class,"text-input")]/input[contains(@type,"text")]'},
PASSWORD = {xpath: '//div[contains(@class,"text-input")]/input[contains(@type,"password")]'},
MODAL_CLOSE = {css: '.portal-pages-close'},
LOGIN_BUTTON = {css: '.portal-pages-main-nav-item > .log-in'},
REGISTER_BUTTON = {css: '.portal-pages-main-nav-item > .register'};


class LoginModalObject extends BaseObject {
  constructor() {
    super();
  }

  async login(username,password) {
    console.log("in login");
    super.sleepWait(1000);
    await super.type(USERNAME,username);
    await super.type(PASSWORD, password);
    await super.clickOn(LOGIN_SUBMIT_BUTTON);
  }

  async closeModal() {
    console.log("In close modal");
    await super.switchToModal();
    await super.clickOn(MODAL_CLOSE);
  }

}
module.exports = new LoginModalObject();