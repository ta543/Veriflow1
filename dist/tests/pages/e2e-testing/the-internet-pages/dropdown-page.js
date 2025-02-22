"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code DropdownPage}.
 *
 *
 * VeriFlow Test Automation - The Internet | DropdownPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDropdownOptionSelected = exports.selectDropdownOption = exports.verifyDropdownPageURL = exports.navigateToDropdownPage = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const dropdownSelect = () => (0, _LocatorUtils_1.getLocatorByXPath)('//*[@id="dropdown"]');
function navigateToDropdownPage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.gotoURL)('https://the-internet.herokuapp.com/dropdown');
        yield dropdownSelect().waitFor({ state: 'visible' });
    });
}
exports.navigateToDropdownPage = navigateToDropdownPage;
function verifyDropdownPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*dropdown/);
        yield dropdownSelect().waitFor({ state: 'visible' });
    });
}
exports.verifyDropdownPageURL = verifyDropdownPageURL;
function selectDropdownOption(optionIndex) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield dropdownSelect().waitFor({ state: 'visible' });
        yield (0, _ActionUtils_1.selectByIndex)(dropdownSelect(), optionIndex - 1);
    });
}
exports.selectDropdownOption = selectDropdownOption;
function verifyDropdownOptionSelected(optionIndex) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield dropdownSelect().waitFor({ state: 'visible' });
        const selectedValue = yield dropdownSelect().inputValue();
        return selectedValue === (optionIndex - 1).toString();
    });
}
exports.verifyDropdownOptionSelected = verifyDropdownOptionSelected;
//# sourceMappingURL=dropdown-page.js.map