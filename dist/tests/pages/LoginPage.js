"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 * This follows a structured Page Object Model (POM) to ensure maintainability and reusability.
 *
 * VeriFlow Test Automation - LoginPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutSuccessful = exports.logout = exports.loginSuccessful = exports.login = void 0;
const tslib_1 = require("tslib");
const action_utils_1 = require("../../src/tobias-playwright/utils/action-utils");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const usernameField = () => (0, locator_utils_1.getLocatorByText)('Username');
const passwordField = () => (0, locator_utils_1.getLocatorByText)('Password');
const loginButton = () => (0, locator_utils_1.getLocatorByText)('Login', { exact: true });
const successMessage = () => (0, locator_utils_1.getLocatorByText)('You logged into a secure area!');
const logoutButton = () => (0, locator_utils_1.getLocatorByText)('Logout', { exact: true });
function login(username, password) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.fill)(usernameField(), username);
        yield (0, action_utils_1.fill)(passwordField(), password);
        yield (0, action_utils_1.click)(loginButton());
    });
}
exports.login = login;
function loginSuccessful() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield successMessage().isVisible();
    });
}
exports.loginSuccessful = loginSuccessful;
function logout() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, action_utils_1.click)(logoutButton());
    });
}
exports.logout = logout;
function logoutSuccessful() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield loginButton().isVisible();
    });
}
exports.logoutSuccessful = logoutSuccessful;
//# sourceMappingURL=LoginPage.js.map