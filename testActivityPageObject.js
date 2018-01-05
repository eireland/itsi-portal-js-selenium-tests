async function testActivityPageObjects() {
  const portal = require('./itsiLandingPageObject');
  const activityPage = require('./itsiActivityPageObject');
  const homeDir = require('os').homedir();

  var url = 'https://itsi.portal.concord.org/';
  var adminName = 'ETestadmin',
    adminPassword = 'ETestadmin';


  portal.manageWindowSize(1680, 1023);
  portal.visit(url);
  portal.verifyPage("STEM Resource Finder");
  console.log("Open Collection Page");
  portal.clickLink('collection');
  portal.verifyCollectionPage();
  console.log("Open About page");
  portal.clickLink('about');
  portal.verifyAboutPage();
  console.log("Open Landing Page");
  portal.clickLink('logo');
  portal.verifyLandingPage();
  portal.clickButton('login');
  portal.login(adminName, adminPassword);

  if (portal.verifyAuthUser('admin')){
    console.log("Auth verified");
  }
  else {console.log("Auth not verified")}

  portal.logout();
  portal.clickButton('register');
  portal.switchToModal();
  var modalHeader = portal.find(REGISTER_MODAL_HEADER).text;
  console.log("Header is " + modalHeader);
  portal.closeModal();
}

testLearnObjects();