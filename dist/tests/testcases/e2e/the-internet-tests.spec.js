"use strict";
/**
 * (C) VeriFlow 2025 - The Internet Tests
 * This test suite validates navigation and functionality on the-internet.herokuapp.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const _AllureMetaData_1 = require("@AllureMetaData");
const HomePage = tslib_1.__importStar(require("../../pages/e2e-testing/the-internet-pages/home-page"));
const DropdownPage = tslib_1.__importStar(require("../../pages/e2e-testing/the-internet-pages/dropdown-page"));
const LoginPage = tslib_1.__importStar(require("../../pages/e2e-testing/the-internet-pages/login-page"));
const CheckboxPage = tslib_1.__importStar(require("../../pages/e2e-testing/the-internet-pages/checkbox-page"));
const KeypressPage = tslib_1.__importStar(require("../../pages/e2e-testing/the-internet-pages/keypress-page"));
_PageSetup_1.test.describe('The Internet App Tests', () => {
    (0, _PageSetup_1.test)('Dropdown test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('dropdownTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickDropdownLink();
        yield DropdownPage.navigateToDropdownPage();
        yield DropdownPage.verifyDropdownPageURL();
        yield DropdownPage.selectDropdownOption(2);
        const isSelectedOption2 = yield DropdownPage.verifyDropdownOptionSelected(2);
        console.assert(isSelectedOption2, 'Dropdown selection failed for option 2');
        yield DropdownPage.selectDropdownOption(3);
        const isSelectedOption3 = yield DropdownPage.verifyDropdownOptionSelected(3);
        console.assert(isSelectedOption3, 'Dropdown selection failed for option 3');
    }));
    (0, _PageSetup_1.test)('Login test - successful login', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('loginTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickLoginPageLink();
        yield LoginPage.verifyLoginPageIsDisplayed();
        yield LoginPage.loginSuccessfully();
        const isAuthenticated = yield LoginPage.isLoginSuccessful();
        console.assert(isAuthenticated, 'Login failed: User was not authenticated successfully');
        if (!isAuthenticated) {
            throw new Error('Login failed: Expected the user to be authenticated, but it was not.');
        }
    }));
    (0, _PageSetup_1.test)('Logout test - successful logout', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('logoutTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickLoginPageLink();
        yield LoginPage.loginSuccessfully();
        yield LoginPage.logout();
        const isLoggedOut = yield LoginPage.isLogoutSuccessful();
        console.assert(isLoggedOut, 'Logout failed: User is still logged in');
        if (!isLoggedOut) {
            throw new Error('Logout failed: Expected the user to be logged out, but they were not.');
        }
        yield LoginPage.verifyLoginPageIsDisplayed();
    }));
    (0, _PageSetup_1.test)('Checkbox test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('checkboxTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickCheckboxesPageLink();
        yield CheckboxPage.toggleCheckbox(1);
        const isCheckbox1Checked = yield CheckboxPage.isCheckboxChecked(1);
        console.assert(isCheckbox1Checked, 'Checkbox 1 toggle failed: It should be checked');
        if (!isCheckbox1Checked) {
            throw new Error('Checkbox 1 toggle failed: Expected it to be checked, but it was not.');
        }
        yield CheckboxPage.toggleCheckbox(2);
        const isCheckbox2Checked = yield CheckboxPage.isCheckboxChecked(2);
        console.assert(!isCheckbox2Checked, 'Checkbox 2 toggle failed: It should be unchecked');
        if (isCheckbox2Checked) {
            throw new Error('Checkbox 2 toggle failed: Expected it to be unchecked, but it was still checked.');
        }
    }));
    (0, _PageSetup_1.test)('Key presses test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('keyPressTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickKeyPressesPageLink();
        yield KeypressPage.clickOnTargetElement();
        yield KeypressPage.checkThatKeyPressInputIsDisplayed();
        yield KeypressPage.sendKey('W');
        const resultW = yield KeypressPage.getLastKeyPressed();
        console.assert(resultW === null || resultW === void 0 ? void 0 : resultW.includes('You entered: W'), `Expected "You entered: W", but got "${resultW}"`);
        yield KeypressPage.sendKey('A');
        const resultA = yield KeypressPage.getLastKeyPressed();
        console.assert(resultA === null || resultA === void 0 ? void 0 : resultA.includes('You entered: A'), `Expected "You entered: A", but got "${resultA}"`);
    }));
});
//# sourceMappingURL=the-internet-tests.spec.js.map