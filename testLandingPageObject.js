async function testITSILandingPageObject() {
  console.log("In testITSILandingPageObject");
  const portal = require('./itsiLandingPageObject');
  const aboutPage = require('./aboutPageObject');
  const homeDir = require('os').homedir();


  const REGISTER_MODAL_HEADER = {css: '#signup-default-modal > div > div > h2 > strong'};


  var url = 'https://itsi-test.portal.concord.org/';
  var adminName = 'ETestadmin',
    adminPassword = 'ETestadmin';


  portal.manageWindowSize(1680, 1023);
  await portal.visit(url);
  await portal.verifyPage("ITSI Portal");
  console.log("Open About page");
  await portal.clickLink('about');
  portal.sleepWait(2000);
  await aboutPage.verifyAboutPage();
  console.log("Open Landing Page");
  await portal.clickLink('logo');
  portal.sleepWait(2000);
  //await portal.verifyLandingPage();
  //await portal.clickButton('login');
  //portal.login(adminName, adminPassword);
  //
  //if (portal.verifyAuthUser('admin')){
  //  console.log("Auth verified");
  //}
  //else {console.log("Auth not verified")}
  //
  //portal.logout();
  //portal.clickButton('register');
  //portal.switchToModal();
  //var modalHeader = portal.find(REGISTER_MODAL_HEADER).text;
  //console.log("Header is " + modalHeader);
  //portal.closeModal();
}

testITSILandingPageObject();