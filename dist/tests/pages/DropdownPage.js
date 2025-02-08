"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDropdownOptionSelected = exports.selectDropdownOption = exports.checkThatDropdownPageIsDisplayed = void 0;
const tslib_1 = require("tslib");
const locator_utils_1 = require("../../src/tobias-playwright/utils/locator-utils");
const dropdownSelect = () => (0, locator_utils_1.getLocatorByText)('Dropdown');
function checkThatDropdownPageIsDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield dropdownSelect().waitFor({ state: 'visible' });
    });
}
exports.checkThatDropdownPageIsDisplayed = checkThatDropdownPageIsDisplayed;
function selectDropdownOption(optionIndex) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const dropdown = dropdownSelect();
        yield dropdown.selectOption({ index: optionIndex - 1 });
    });
}
exports.selectDropdownOption = selectDropdownOption;
function isDropdownOptionSelected(optionIndex) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const dropdown = dropdownSelect();
        const selectedValue = yield dropdown.inputValue();
        return selectedValue === (optionIndex - 1).toString();
    });
}
exports.isDropdownOptionSelected = isDropdownOptionSelected;
//# sourceMappingURL=DropdownPage.js.map