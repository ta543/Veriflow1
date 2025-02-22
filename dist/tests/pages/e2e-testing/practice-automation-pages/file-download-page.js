"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates file downloads on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = exports.checkThatFileDownloadPageIsDisplayed = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
// Locators
const fileDownloadPageDisplayed = () => (0, _LocatorUtils_1.getLocatorByRole)('heading', { name: 'File Download' });
const downloadLinks = (index) => (0, _LocatorUtils_1.getLocatorByRole)('link', { name: 'Download' }).nth(index);
// Methods
function checkThatFileDownloadPageIsDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(fileDownloadPageDisplayed());
    });
}
exports.checkThatFileDownloadPageIsDisplayed = checkThatFileDownloadPageIsDisplayed;
function downloadFile() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _ActionUtils_1.click)(downloadLinks(2));
        yield (0, _ActionUtils_1.wait)(500);
        yield (0, _AssertUtils_1.expectElementToBeVisible)(downloadLinks(4));
        yield (0, _ActionUtils_1.click)(downloadLinks(4));
        const passwordFrame = yield (0, _LocatorUtils_1.getLocator)('#wpdm-lock-frame').contentFrame();
        const passwordInput = passwordFrame === null || passwordFrame === void 0 ? void 0 : passwordFrame.getByRole('textbox', { name: 'Enter Password' });
        yield (0, _AssertUtils_1.expectElementToBeVisible)(passwordInput, { timeout: 10000 });
        yield (passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.dblclick());
        yield (0, _ActionUtils_1.fill)(passwordInput, 'automateNow');
        const submitButton = passwordFrame === null || passwordFrame === void 0 ? void 0 : passwordFrame.getByRole('button', { name: 'Submit' });
        yield (0, _AssertUtils_1.expectElementToBeVisible)(submitButton);
        yield (0, _ActionUtils_1.click)(submitButton);
        const downloadReadyText = passwordFrame === null || passwordFrame === void 0 ? void 0 : passwordFrame.getByText('Your Download Link is Ready');
        yield (0, _AssertUtils_1.expectElementToBeVisible)(downloadReadyText);
        yield (0, _ActionUtils_1.click)(downloadReadyText);
        const closeButton = passwordFrame === null || passwordFrame === void 0 ? void 0 : passwordFrame.getByRole('button', { name: 'Close' });
        yield (0, _AssertUtils_1.expectElementToBeVisible)(closeButton);
        yield (0, _ActionUtils_1.click)(closeButton);
    });
}
exports.downloadFile = downloadFile;
//# sourceMappingURL=file-download-page.js.map