"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates broken links on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyErrorMessage = exports.clickBrokenLink = exports.verifyBrokenLinksPageURL = exports.verifyBrokenLinksPageDisplayed = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
// Locators
const brokenLinksPageDisplayed = () => (0, _LocatorUtils_1.getLocatorByRole)('heading', { name: 'Broken Links' });
const brokenLink = () => (0, _LocatorUtils_1.getLocatorByRole)('link', { name: 'broken link' });
const errorMessage = () => (0, _LocatorUtils_1.getLocatorByText)('Oops...');
// Methods
function verifyBrokenLinksPageDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(brokenLinksPageDisplayed());
    });
}
exports.verifyBrokenLinksPageDisplayed = verifyBrokenLinksPageDisplayed;
function verifyBrokenLinksPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*broken-links/);
    });
}
exports.verifyBrokenLinksPageURL = verifyBrokenLinksPageURL;
function clickBrokenLink() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(brokenLink());
    });
}
exports.clickBrokenLink = clickBrokenLink;
function verifyErrorMessage() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(errorMessage());
    });
}
exports.verifyErrorMessage = verifyErrorMessage;
//# sourceMappingURL=broken-links-page.js.map