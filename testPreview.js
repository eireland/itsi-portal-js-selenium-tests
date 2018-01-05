async function testPreviews()
{
  const portal = require('./itsiLandingPageObject');
  const activityPage = require('./itsActivityPageObject');
  const homeDir = require('os').homedir();

  var url = 'https://itsi.concord.org/itsi';
  //var url = 'https://learn.concord.org/search?search_term=&sort_order=Newest&include_official=1&material_types%5B%5D=Activity&material_properties%5B%5D=Runs+in+browser&investigation_page=1&activity_page=3&interactive_page=1';
  var testScreenshotDir = homeDir+'/Sites/itsi_material_screenshot_results/test_screenshots_js/';

  async function parseCategoryText(category) {
    var grade, subject, categoryObj={};
    grade = category.split(' ')[0];
    subject = category.split(' ')[1];
    return categoryObj{"grade":grade , "subject":subject};
  }

  portal.manageWindowSize(1680, 1023);
  portal.visit(url);

  var categories = activityPage.getCategories()
  categories.forEach(function(category) {
      var categoryText = activity.getCategory();
      var parsedCategory = parseCategoryText(categoryText);
      await activityPage.clickOnCategory(parsedCategory.grade, parsedCategory.subject);

      var activities = activityPage.findAllActivities();
      for (var i = 0; i < activities.length; i++) {
        activityPage.clickOnActivity();
        portal.saveScreenshot(testScreenshotDir, activityTitle, materialNum);
      }
    }
  )

  portal.teardown();
}

testPreviews();