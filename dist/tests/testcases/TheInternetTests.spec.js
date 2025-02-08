"use strict";
/**
 * (C) VeriFlow 2025
 *
 * This test suite validates navigation and functionality across multiple pages
 * including Dropdown, Login, Checkbox, and Key Press pages.
 *
 * VeriFlow Test Automation - The Internet Tests
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const page_setup_1 = require("../../src/tobias-playwright/setup/page-setup");
const test_metadata_1 = require("../../src/tobias-playwright/utils/test-metadata");
const HomePage_1 = require("../pages/HomePage");
const DropdownPage_1 = require("../pages/DropdownPage");
const LoginPage_1 = require("../pages/LoginPage");
const CheckboxPage_1 = require("../pages/CheckboxPage");
const KeyPressPage_1 = require("../pages/KeyPressPage");
page_setup_1.test.describe('The Internet App Tests', () => {
    (0, page_setup_1.test)('Dropdown test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, test_metadata_1.logTestDetails)('dropdownTest');
        yield (0, HomePage_1.navigateToHomePage)();
        yield (0, HomePage_1.clickDropdownLink)();
        yield (0, DropdownPage_1.checkThatDropdownPageIsDisplayed)();
        yield (0, DropdownPage_1.selectDropdownOption)(2);
        const isSelectedOption2 = yield (0, DropdownPage_1.isDropdownOptionSelected)(2);
        console.assert(isSelectedOption2, 'Dropdown selection failed for option 2');
        yield (0, DropdownPage_1.selectDropdownOption)(3);
        const isSelectedOption3 = yield (0, DropdownPage_1.isDropdownOptionSelected)(3);
        console.assert(isSelectedOption3, 'Dropdown selection failed for option 3');
    }));
    (0, page_setup_1.test)('Login test - successful login', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, test_metadata_1.logTestDetails)('loginTest');
        yield (0, HomePage_1.navigateToHomePage)();
        yield (0, HomePage_1.clickLoginPageLink)();
        yield (0, LoginPage_1.login)('tomsmith', 'SuperSecretPassword!');
        const isLoginSuccessful = yield (0, LoginPage_1.loginSuccessful)();
        console.assert(isLoginSuccessful, 'Login failed: User was not authenticated successfully');
        if (!isLoginSuccessful) {
            throw new Error('Login failed: Expected the user to be authenticated, but it was not.');
        }
    }));
    (0, page_setup_1.test)('Logout test - successful logout', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, test_metadata_1.logTestDetails)('logoutTest');
        yield (0, HomePage_1.navigateToHomePage)();
        yield (0, HomePage_1.clickLoginPageLink)();
        yield (0, LoginPage_1.login)('tomsmith', 'SuperSecretPassword!');
        yield (0, LoginPage_1.logout)();
        const isLogoutSuccessful = yield (0, LoginPage_1.logoutSuccessful)();
        console.assert(isLogoutSuccessful, 'Logout failed: User is still logged in');
        if (!isLogoutSuccessful) {
            throw new Error('Logout failed: Expected the user to be logged out, but they were not.');
        }
    }));
    (0, page_setup_1.test)('Checkbox test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, test_metadata_1.logTestDetails)('checkboxTest');
        yield (0, HomePage_1.navigateToHomePage)();
        yield (0, HomePage_1.clickCheckboxesPageLink)();
        yield (0, CheckboxPage_1.toggleCheckbox)(1);
        yield (0, CheckboxPage_1.toggleCheckbox)(2);
        const isCheckbox1Checked = yield (0, CheckboxPage_1.isCheckboxChecked)(1);
        console.assert(isCheckbox1Checked, 'Checkbox 1 toggle failed: It should be checked');
        if (!isCheckbox1Checked) {
            throw new Error('Checkbox 1 toggle failed: Expected it to be checked, but it was not.');
        }
        const isCheckbox2Checked = yield (0, CheckboxPage_1.isCheckboxChecked)(2);
        console.assert(!isCheckbox2Checked, 'Checkbox 2 toggle failed: It should be unchecked');
        if (isCheckbox2Checked) {
            throw new Error('Checkbox 2 toggle failed: Expected it to be unchecked, but it was still checked.');
        }
    }));
    (0, page_setup_1.test)('Key presses test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, test_metadata_1.logTestDetails)('keyPressTest');
        yield (0, HomePage_1.navigateToHomePage)();
        yield (0, HomePage_1.clickKeyPressesPageLink)();
        yield (0, KeyPressPage_1.checkThatKeyPressInputIsDisplayed)();
        yield (0, KeyPressPage_1.sendKey)('W');
        const resultW = yield (0, KeyPressPage_1.getLastKeyPressed)();
        console.assert(resultW === null || resultW === void 0 ? void 0 : resultW.includes('You entered: W'), `Key press failed: Expected "You entered: W", but got "${resultW}"`);
        if (!(resultW === null || resultW === void 0 ? void 0 : resultW.includes('You entered: W'))) {
            throw new Error(`Key press failed: Expected "You entered: W", but got "${resultW}"`);
        }
        yield (0, KeyPressPage_1.sendKey)('A');
        const resultA = yield (0, KeyPressPage_1.getLastKeyPressed)();
        console.assert(resultA === null || resultA === void 0 ? void 0 : resultA.includes('You entered: A'), `Key press failed: Expected "You entered: A", but got "${resultA}"`);
        if (!(resultA === null || resultA === void 0 ? void 0 : resultA.includes('You entered: A'))) {
            throw new Error(`Key press failed: Expected "You entered: A", but got "${resultA}"`);
        }
    }));
});
//# sourceMappingURL=TheInternetTests.spec.js.map