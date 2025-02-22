"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code HomePage}.
 *
 * VeriFlow Test Automation - The Internet | HomePage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyKeyPressesPageURL = exports.clickKeyPressesPageLink = exports.verifyCheckboxesPageURL = exports.clickCheckboxesPageLink = exports.verifyLoginPageURL = exports.clickLoginPageLink = exports.verifyDropdownPageURL = exports.clickDropdownLink = exports.verifyHomePageURL = exports.navigateToHomePage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const homePageURL = 'https://the-internet.herokuapp.com/';
const dropdownLink = () => (0, _LocatorUtils_1.getLocatorByText)('Dropdown', { exact: true });
const loginPageLink = () => (0, _LocatorUtils_1.getLocatorByText)('Form Authentication', { exact: true });
const checkboxesPageLink = () => (0, _LocatorUtils_1.getLocatorByText)('Checkboxes', { exact: true });
const keyPressesPageLink = () => (0, _LocatorUtils_1.getLocatorByText)('Key Presses', { exact: true });
function navigateToHomePage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.gotoURL)(homePageURL);
    });
}
exports.navigateToHomePage = navigateToHomePage;
function verifyHomePageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(new RegExp('https://the-internet.herokuapp.com/'));
        yield dropdownLink().waitFor({ state: 'visible' });
    });
}
exports.verifyHomePageURL = verifyHomePageURL;
function clickDropdownLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield dropdownLink().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.click)(dropdownLink());
    });
}
exports.clickDropdownLink = clickDropdownLink;
function verifyDropdownPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*dropdown/);
        yield dropdownLink().waitFor({ state: 'visible' });
    });
}
exports.verifyDropdownPageURL = verifyDropdownPageURL;
function clickLoginPageLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield loginPageLink().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.click)(loginPageLink());
    });
}
exports.clickLoginPageLink = clickLoginPageLink;
function verifyLoginPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*login/);
        yield loginPageLink().waitFor({ state: 'visible' });
    });
}
exports.verifyLoginPageURL = verifyLoginPageURL;
function clickCheckboxesPageLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield checkboxesPageLink().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.click)(checkboxesPageLink());
    });
}
exports.clickCheckboxesPageLink = clickCheckboxesPageLink;
function verifyCheckboxesPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*checkboxes/);
        yield checkboxesPageLink().waitFor({ state: 'visible' });
    });
}
exports.verifyCheckboxesPageURL = verifyCheckboxesPageURL;
function clickKeyPressesPageLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield keyPressesPageLink().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.click)(keyPressesPageLink());
    });
}
exports.clickKeyPressesPageLink = clickKeyPressesPageLink;
function verifyKeyPressesPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*key_presses/);
        yield keyPressesPageLink().waitFor({ state: 'visible' });
    });
}
exports.verifyKeyPressesPageURL = verifyKeyPressesPageURL;
//# sourceMappingURL=home-page.js.map