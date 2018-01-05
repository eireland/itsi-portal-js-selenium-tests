var BaseObject = require('./webdriverBase');
var webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

const
  CREATE_ACTIVITY_BUTTON = {xpath: "//div[contains(@class,'landing-page-content')]/p[contains(@class,'show-to-author-visitor')]/a[contains(text(),'Create ITSI Activity')]"};

const //These constants should should be used with find_elements to return an array of all the button icons
  EDIT_ICON = {css: ".mb-edit"},
  COPY_ICON = {css: ".mb-copy"},
  INFO_ICON = {css: ".mb-toggle-info"},
  RUN_ICON  = {css: ".mb-run"},
  ASSIGN_TO_CLASS_ICON = {css: ".mb-assign-to-class"},
  ASSIGN_TO_COLLECTION_ICON = {css: ".mb-assign-to-collection"},
  MATERIAL_NAME = {css: ".mb-material-name"},
  ARCHIVE_THIS_LINK = {css: ".mb-archive-link"},
  CATEGORY_BUTTONS = {css: ".mb-category"};

const //ITSI portal menu items in aux-links
   ADMIN_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'Admin')]"},
   ACTIVITIES_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'Activities')]"},
   INTERACTIVES_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'Interactives')]"},
   TEACHER_GUIDES_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'Teacher Guides')]"},
   IMAGES_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'Images')]"},
   CAREERSIGHT_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'CareerSight')]"},
   PROBESIGHT_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'ProbeSight')]"},
   SCHOOLOGY_LINK = {xpath : "//ul[contains(@class,'aux-links')]/li[contains(text(),'Schoology')]"};


class ITSIActivityPageObject extends BaseObject {

  constructor() {
    global.this = super();
  }

  getCategories(){
    return this.find_all(CATEGORY_BUTTONS);
  }

  getCategory(category){
    return category.text;
  }

  async clickOnCategory(grade, subject) {
    var categoryButtons = this.find_all(CATEGORY_BUTTONS);

    categoryButtons.forEach(function whichButton(button, grade, subject){
      if (button.text.includes(grade) && button.text.includes(subject)) {
        button.click();
      }
    })
  }

  findAllActivities(){
    return this.find_all(RUN_ICON);
  }

  clickOnActivity(){

  }

}
module.exports = new ITSIActivityPageObject();

