var BaseObject = require('./webdriverBase');
//var webdriver = require('selenium-webdriver'),
//  By = webdriver.By,
//  until = webdriver.until;

const
  EXPLORE_ACTIVITIES = {xpath: "//div[contains(@class,'home-page-content')]/p/a[contains(text(), 'Explore ITSI activities')]"},
  ITSI_HOME_LINK = {css: '.concord-logo'},
  ABOUT_LINK = {css: ".portal-pages-main-nav-about > a" },
  REGISTER_BUTTON = {xpath: "//li[contains(@class,'portal-pages-main-nav-item')]/a[contains(@href,'/signup')]"},
  LOGIN_BUTTON = {xpath:  "//li[contains(@class,'portal-pages-main-nav-item')]/a[contains(@href,'/login')]"},
  LOGOUT = {xpath: "//li[contains(@class,'portal-pages-main-nav-item')]/a[contains(@title,'Log Out')]"},
  LOGOUT_SUCCESS = {xpath: '//div[(@class="flash notice") and contains(text(),"Signed out successfully")]'};

class ITSILandingPageObject extends BaseObject {

  constructor() {
    global.this = super();
  }

  async clickLink(link) {
    var element;
    switch (link) {
      case 'logo':
        element = ITSI_HOME_LINK;
        break;
      case 'about':
        element = ABOUT_LINK;
        break;
    };
    await super.clickOn(element);
  }

  async clickButton(button){
    var element;
    switch (button){
      case 'login':
        element = LOGIN_BUTTON;
        break;
      case 'register':
        element = REGISTER_BUTTON;
        break;
      case 'explore':
        element = EXPLORE_ACTIVITIES;
        break;
    }
    await super.clickOn(element);
  }

  async verifyLandingPage(){
    await super.displayed(EXPLORE_ACTIVITIES);
  }

  async logout() {
    await super.clickOn(LOGOUT);
    if (super.displayed(LOGOUT_SUCCESS)) {
      console.log("Sign out successful");
    }
    else {
      console.log("Sign out did not happen")
    }
  }
}

module.exports = new ITSILandingPageObject();
