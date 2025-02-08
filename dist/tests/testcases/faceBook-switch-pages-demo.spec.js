"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const action_utils_1 = require("../../src/tobias-playwright/utils/action-utils");
const page_utils_1 = require("../../src/tobias-playwright/utils/page-utils");
const page_setup_1 = require("../../src/tobias-playwright/setup/page-setup");
const facebook_page_1 = require("../pages/facebook-page");
page_setup_1.test.describe('test to switch and navigate to different pages from facebook footer links', () => {
    (0, page_setup_1.test)('Switch pages demo from facebook footer links', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        yield (0, facebook_page_1.navigatetoFacebookHomePage)();
        yield (0, facebook_page_1.verifyFacebookPageURL)();
        // clicking on instagram link in footer which opens a new tab
        yield (0, facebook_page_1.clickFacebookInstagramFooterLink)();
        // navigating to Instagram page
        yield (0, page_utils_1.switchPage)(2);
        // verifying the instagram page
        yield (0, facebook_page_1.verifyInstagaramPageURL)();
        // navigating back to Facebook page
        yield (0, page_utils_1.switchToDefaultPage)();
        // clicking on Privacy policy link which opens in the same tab
        yield (0, facebook_page_1.clickFacebookPrivacyPolicyFooterLink)();
        yield (0, facebook_page_1.verifyPrivacyPolicyPageURL)();
        // going back to facebook page from Privacy policy page
        yield (0, action_utils_1.goBack)();
        yield (0, facebook_page_1.verifyFacebookPageURL)();
        // clicking on Meta Quest footer link which opens in new tab
        yield (0, facebook_page_1.clickFacebookMetaQuestFooterLink)();
        yield (0, page_utils_1.switchPage)(3);
        yield (0, facebook_page_1.verifyMetaQuestpageURL)();
        // closing Instagram page
        yield (0, page_utils_1.closePage)(2);
        // closing Meta quest page
        //since there are only 2 pages now, we use page '2' instead of '3'
        yield (0, page_utils_1.closePage)(2);
        //closing the final facebook page
        yield (0, page_utils_1.closePage)(1);
    }));
});
//# sourceMappingURL=faceBook-switch-pages-demo.spec.js.map