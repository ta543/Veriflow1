"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 * VeriFlow Test Automation - The Internet | LoginPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLogoutSuccessful = exports.verifyLoginPageIsDisplayed = exports.logout = exports.verifyErrorMessageForFailureLogin = exports.isLoginSuccessful = exports.loginSuccessfully = void 0;
const tslib_1 = require("tslib");
const _LocatorUtils_1 = require("@LocatorUtils");
const _ActionUtils_1 = require("@ActionUtils");
const _TestDataTheInternet_1 = require("@TestDataTheInternet");
const _AssertUtils_1 = require("@AssertUtils");
const usernameInput = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Username' });
const passwordInput = () => (0, _LocatorUtils_1.getLocatorByRole)('textbox', { name: 'Password' });
const loginButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;
const successMessage = () => (0, _LocatorUtils_1.getLocatorByText)('You logged into a secure area!');
const logoutButton = () => (0, _LocatorUtils_1.getLocatorByText)('Logout', { exact: true });
const logoutMessage = () => (0, _LocatorUtils_1.getLocatorByXPath)('//div[@id="flash"]');
const loginPageHeader = () => (0, _LocatorUtils_1.getLocatorByXPath)("//h2[normalize-space()='Login Page']");
function loginSuccessfully() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield usernameInput().fill(_TestDataTheInternet_1.FormFieldsCredentials.username);
        yield passwordInput().fill(_TestDataTheInternet_1.FormFieldsCredentials.password);
        yield loginButton().click();
    });
}
exports.loginSuccessfully = loginSuccessfully;
function isLoginSuccessful() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield successMessage().isVisible();
    });
}
exports.isLoginSuccessful = isLoginSuccessful;
function verifyErrorMessageForFailureLogin() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(errorMessage);
    });
}
exports.verifyErrorMessageForFailureLogin = verifyErrorMessageForFailureLogin;
function logout() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(logoutButton());
    });
}
exports.logout = logout;
function verifyLoginPageIsDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield loginPageHeader().waitFor({ state: 'visible', timeout: 5000 });
    });
}
exports.verifyLoginPageIsDisplayed = verifyLoginPageIsDisplayed;
function isLogoutSuccessful() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const isMessageVisible = yield logoutMessage().isVisible();
        if (!isMessageVisible) {
            return false;
        }
        const messageText = yield logoutMessage().textContent();
        return (messageText === null || messageText === void 0 ? void 0 : messageText.includes('You logged out of the secure area!')) || false;
    });
}
exports.isLogoutSuccessful = isLogoutSuccessful;
//# sourceMappingURL=login-page.js.map