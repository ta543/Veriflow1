"use strict";
/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code CheckboxPage}.
 *
 *
 * VeriFlow Test Automation - The Internet | CheckboxPage
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCheckboxChecked = exports.toggleCheckbox = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
const checkbox1 = () => (0, _LocatorUtils_1.getLocatorByXPath)("//form[@id='checkboxes']/input[1]");
const checkbox2 = () => (0, _LocatorUtils_1.getLocatorByXPath)("//form[@id='checkboxes']/input[2]");
function toggleCheckbox(index) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const checkbox = index === 1 ? checkbox1() : checkbox2();
        yield (0, _ActionUtils_1.click)(checkbox);
    });
}
exports.toggleCheckbox = toggleCheckbox;
function isCheckboxChecked(index) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const checkbox = index === 1 ? checkbox1() : checkbox2();
        return yield checkbox.isChecked();
    });
}
exports.isCheckboxChecked = isCheckboxChecked;
//# sourceMappingURL=checkbox-page.js.map