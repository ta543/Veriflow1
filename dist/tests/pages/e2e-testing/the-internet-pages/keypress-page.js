"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this class is to manage all methods that will handle the execution of test steps
 * on {@code KeyPressPage}.
 *
 * VeriFlow Test Automation - The Internet | KeyPressPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastKeyPressed = exports.sendKey = exports.checkThatKeyPressInputIsDisplayed = exports.clickOnTargetElement = void 0;
const tslib_1 = require("tslib");
const _LocatorUtils_1 = require("@LocatorUtils");
const keyPressInput = () => (0, _LocatorUtils_1.getLocatorByCSS)('#target');
const resultText = () => (0, _LocatorUtils_1.getLocatorByXPath)('//*[@id="result"]');
const targetElement = () => (0, _LocatorUtils_1.getLocatorByCSS)('#target');
function clickOnTargetElement() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield targetElement().waitFor({ state: 'visible', timeout: 5000 });
        yield targetElement().click();
    });
}
exports.clickOnTargetElement = clickOnTargetElement;
function checkThatKeyPressInputIsDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const inputField = keyPressInput();
        yield inputField.waitFor({ state: 'visible', timeout: 5000 });
        console.log('Key Press Input is displayed and ready for interaction');
    });
}
exports.checkThatKeyPressInputIsDisplayed = checkThatKeyPressInputIsDisplayed;
function sendKey(key) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const inputField = keyPressInput();
        yield inputField.focus(); // Ensure the input field is focused
        yield inputField.press(key);
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
//# sourceMappingURL=keypress-page.js.map