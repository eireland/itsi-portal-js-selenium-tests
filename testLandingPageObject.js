async function testITSILandingPageObject() {
  console.log("In testITSILandingPageObject");
  const portal = require('./itsiLandingPageObject');
  const aboutPage = require('./aboutPageObject');
  const loginModal = require ('./loginModalObject');
  const homePage = require ('./userHomePageObject');
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
  await portal.sleepWait(2000);
  await aboutPage.verifyAboutPage();
  console.log("Open Landing Page");
  await portal.clickLink('logo');
  await portal.sleepWait(2000);
  await portal.verifyLandingPage();
  await portal.clickButton('login');
  await loginModal.login(adminName, adminPassword);
  await portal.sleepWait(2000);

  if (await homePage.verifyAuthUser('admin')){
    console.log("Auth verified");
    await portal.logout();
  }
  else {console.log("Auth not verified")}
  await portal.sleepWait(2000);
  await portal.clickButton('register');
  await portal.switchToModal();
  var modalHeader = await portal.find(REGISTER_MODAL_HEADER).text;
  console.log("Header is " + modalHeader);
  await loginModal.closeModal();
}

testITSILandingPageObject();