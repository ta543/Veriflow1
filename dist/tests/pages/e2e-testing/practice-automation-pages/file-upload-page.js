"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates file uploads on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyFileUploadSuccess = exports.uploadFile = exports.verifyFileUploadPageURL = exports.checkThatFileUploadPageIsDisplayed = void 0;
const tslib_1 = require("tslib");
const _ActionUtils_1 = require("@ActionUtils");
const _AssertUtils_1 = require("@AssertUtils");
const _LocatorUtils_1 = require("@LocatorUtils");
// Locators
const fileUploadPageHeading = () => (0, _LocatorUtils_1.getLocatorByRole)('heading', { name: 'File Upload' });
const fileUploadInput = () => (0, _LocatorUtils_1.getLocator)('#file-upload');
const uploadButton = () => (0, _LocatorUtils_1.getLocatorByRole)('button', { name: 'Upload' });
const successMessage = () => (0, _LocatorUtils_1.getLocatorByRole)('status');
// Methods
function checkThatFileUploadPageIsDisplayed() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToBeVisible)(fileUploadPageHeading());
    });
}
exports.checkThatFileUploadPageIsDisplayed = checkThatFileUploadPageIsDisplayed;
function verifyFileUploadPageURL() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectPageToHaveURL)(/.*file-upload/);
    });
}
exports.verifyFileUploadPageURL = verifyFileUploadPageURL;
function uploadFile(filePath) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield fileUploadInput().click();
        yield (0, _ActionUtils_1.uploadFiles)(fileUploadInput(), filePath);
        yield (0, _ActionUtils_1.click)(uploadButton());
    });
}
exports.uploadFile = uploadFile;
function verifyFileUploadSuccess() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, _AssertUtils_1.expectElementToHaveText)(successMessage(), 'Thank you for your message. It has been sent.');
    });
}
exports.verifyFileUploadSuccess = verifyFileUploadSuccess;
//# sourceMappingURL=file-upload-page.js.map