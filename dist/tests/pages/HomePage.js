"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyKeyPressesPageURL = exports.clickKeyPressesPageLink = exports.verifyCheckboxesPageURL = exports.clickCheckboxesPageLink = exports.verifyLoginPageURL = exports.clickLoginPageLink = exports.verifyDropdownPageURL = exports.clickDropdownLink = exports.verifyHomePageURL = exports.navigateToHomePage = void 0;
const tslib_1 = require("tslib");
const action_utils_1 = require("../../src/tobias-playwright/utils/action-utils");
const assert_utils_1 = require("../../src/tobias-playwright/utils/assert-utils");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const dropdownLink = () => (0, locator_utils_1.getLocatorByText)('Dropdown', { exact: true });
const loginPageLink = () => (0, locator_utils_1.getLocatorByText)('Login Page', { exact: true });
const checkboxesPageLink = () => (0, locator_utils_1.getLocatorByText)('Checkboxes', { exact: true });
const keyPressesPageLink = () => (0, locator_utils_1.getLocatorByText)('Key Presses', { exact: true });
function navigateToHomePage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.gotoURL)('https://the-internet.herokuapp.com/');
    });
}
exports.navigateToHomePage = navigateToHomePage;
function verifyHomePageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(new RegExp('https://the-internet.herokuapp.com/'));
    });
}
exports.verifyHomePageURL = verifyHomePageURL;
function clickDropdownLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(dropdownLink());
    });
}
exports.clickDropdownLink = clickDropdownLink;
function verifyDropdownPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(/.*dropdown/);
    });
}
exports.verifyDropdownPageURL = verifyDropdownPageURL;
function clickLoginPageLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(loginPageLink());
    });
}
exports.clickLoginPageLink = clickLoginPageLink;
function verifyLoginPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(/.*login/);
    });
}
exports.verifyLoginPageURL = verifyLoginPageURL;
function clickCheckboxesPageLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(checkboxesPageLink());
    });
}
exports.clickCheckboxesPageLink = clickCheckboxesPageLink;
function verifyCheckboxesPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(/.*checkboxes/);
    });
}
exports.verifyCheckboxesPageURL = verifyCheckboxesPageURL;
function clickKeyPressesPageLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(keyPressesPageLink());
    });
}
exports.clickKeyPressesPageLink = clickKeyPressesPageLink;
function verifyKeyPressesPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, assert_utils_1.expectPageToHaveURL)(/.*key_presses/);
    });
}
exports.verifyKeyPressesPageURL = verifyKeyPressesPageURL;
//# sourceMappingURL=HomePage.js.map