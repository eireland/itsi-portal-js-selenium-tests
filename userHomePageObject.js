var BaseObject = require('./webdriverBase');

const AUXLINK_ADMIN = {xpath: '//div[contains(@id,"utility-links")]/ul[contains(@class,"aux-links")]/li/a[contains(@href, "/admin")]'};
class UserHomePageObject extends BaseObject {

  constructor() {
    global.this = super();
  }

  async verifyAuthUser(user){
    switch (user) {
      case 'admin':
        console.log(await super.textOf(AUXLINK_ADMIN));
        var visible = await super.displayed(AUXLINK_ADMIN);
        if (visible) {
          return true;
      } else {
          console.log("Couldn't find link");
          return false;
        }
    }
  }

}
module.exports = new UserHomePageObject();