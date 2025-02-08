"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this class is to manage all methods that will handle the execution of test steps
 * on {@code KeyPressPage}.
 *
 * This file follows a structured Page Object Model (POM) to ensure maintainability and reusability.
 *
 * VeriFlow Test Automation - KeyPressPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastKeyPressed = exports.sendKey = exports.checkThatKeyPressInputIsDisplayed = void 0;
const tslib_1 = require("tslib");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const keyPressInput = () => (0, locator_utils_1.getLocatorByText)('Key Press Input');
const resultText = () => (0, locator_utils_1.getLocatorByText)('Result');
function checkThatKeyPressInputIsDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield keyPressInput().waitFor({ state: 'visible', timeout: 5000 });
    });
}
exports.checkThatKeyPressInputIsDisplayed = checkThatKeyPressInputIsDisplayed;
function sendKey(key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield keyPressInput().waitFor({ state: 'visible', timeout: 5000 });
        yield keyPressInput().click();
        yield keyPressInput().press(key);
    });
}
exports.sendKey = sendKey;
function getLastKeyPressed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield resultText().waitFor({ state: 'visible', timeout: 5000 });
        return yield resultText().textContent();
    });
}
exports.getLastKeyPressed = getLastKeyPressed;
//# sourceMappingURL=KeyPressPage.js.map