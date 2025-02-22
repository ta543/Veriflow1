"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code HomePage}.
 *
 * VeriFlow Test Automation - Automation Exercise | HomePage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTestCasesPageURL = exports.clickTestCasesLink = exports.verifyContactUsPageURL = exports.clickContactUsLink = exports.verifyLoginPageURL = exports.clickLoginPageLink = exports.verifyCartPageURL = exports.clickCartLink = exports.verifyProductsPageURL = exports.clickProductsLink = exports.verifyHomePageURL = exports.navigateToHomePage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const homePageURL = 'https://www.automationexercise.com/';
// Locators
const productsLink = () => (0, _LocatorUtils_1.getLocatorByText)(' Products', { exact: true });
const cartLink = () => (0, _LocatorUtils_1.getLocatorByText)('Cart', { exact: true });
const loginPageLink = () => (0, _LocatorUtils_1.getLocatorByText)('Signup / Login', { exact: true });
const contactUsLink = () => (0, _LocatorUtils_1.getLocatorByText)('Contact us', { exact: true });
const testCasesLink = () => (0, _LocatorUtils_1.getLocatorByText)('Test Cases', { exact: true });
// Methods
function navigateToHomePage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.gotoURL)(homePageURL);
        yield (0, _ActionUtils_1.wait)(1000);
        yield (0, _ActionUtils_1.acceptConsentIfVisible)();
    });
}
exports.navigateToHomePage = navigateToHomePage;
function verifyHomePageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(new RegExp(homePageURL));
    });
}
exports.verifyHomePageURL = verifyHomePageURL;
function clickProductsLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(productsLink());
    });
}
exports.clickProductsLink = clickProductsLink;
function verifyProductsPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*products/);
        yield productsLink().waitFor({ state: 'visible' });
    });
}
exports.verifyProductsPageURL = verifyProductsPageURL;
function clickCartLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield cartLink().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.click)(cartLink());
    });
}
exports.clickCartLink = clickCartLink;
function verifyCartPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*view_cart/);
        yield cartLink().waitFor({ state: 'visible' });
    });
}
exports.verifyCartPageURL = verifyCartPageURL;
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
function clickContactUsLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield contactUsLink().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.click)(contactUsLink());
    });
}
exports.clickContactUsLink = clickContactUsLink;
function verifyContactUsPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*contact_us/);
        yield contactUsLink().waitFor({ state: 'visible' });
    });
}
exports.verifyContactUsPageURL = verifyContactUsPageURL;
function clickTestCasesLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield testCasesLink().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.click)(testCasesLink());
    });
}
exports.clickTestCasesLink = clickTestCasesLink;
function verifyTestCasesPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*test_cases/);
        yield testCasesLink().waitFor({ state: 'visible' });
    });
}
exports.verifyTestCasesPageURL = verifyTestCasesPageURL;
//# sourceMappingURL=home-page.js.map