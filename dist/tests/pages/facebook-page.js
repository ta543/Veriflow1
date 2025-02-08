"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyMetaQuestpageURL = exports.clickFacebookMetaQuestFooterLink = exports.verifyPrivacyPolicyPageURL = exports.clickFacebookPrivacyPolicyFooterLink = exports.verifyInstagaramPageURL = exports.clickFacebookInstagramFooterLink = exports.verifyFacebookPageURL = exports.navigatetoFacebookHomePage = void 0;
const tslib_1 = require("tslib");
const action_utils_1 = require("../../src/tobias-playwright/utils/action-utils");
const assert_utils_1 = require("../../src/tobias-playwright/utils/assert-utils");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const instagramLink = () => (0, locator_utils_1.getLocatorByText)('Instagram', { exact: true });
const privacyPolicyLink = () => (0, locator_utils_1.getLocatorByText)('Privacy Policy');
const metaQuestLink = () => (0, locator_utils_1.getLocatorByText)('Meta Quest');
function navigatetoFacebookHomePage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.gotoURL)('https://www.facebook.com/');
    });
}
exports.navigatetoFacebookHomePage = navigatetoFacebookHomePage;
function verifyFacebookPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(new RegExp('https://www.facebook.com/'));
    });
}
exports.verifyFacebookPageURL = verifyFacebookPageURL;
function clickFacebookInstagramFooterLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(instagramLink());
    });
}
exports.clickFacebookInstagramFooterLink = clickFacebookInstagramFooterLink;
function verifyInstagaramPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(new RegExp('https://www.instagram.com/'));
    });
}
exports.verifyInstagaramPageURL = verifyInstagaramPageURL;
function clickFacebookPrivacyPolicyFooterLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.clickAndNavigate)(privacyPolicyLink());
    });
}
exports.clickFacebookPrivacyPolicyFooterLink = clickFacebookPrivacyPolicyFooterLink;
function verifyPrivacyPolicyPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(new RegExp('www.facebook.com/privacy/policy/'));
    });
}
exports.verifyPrivacyPolicyPageURL = verifyPrivacyPolicyPageURL;
function clickFacebookMetaQuestFooterLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(metaQuestLink());
    });
}
exports.clickFacebookMetaQuestFooterLink = clickFacebookMetaQuestFooterLink;
function verifyMetaQuestpageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(new RegExp('meta.com/quest/'));
    });
}
exports.verifyMetaQuestpageURL = verifyMetaQuestpageURL;
//# sourceMappingURL=facebook-page.js.map