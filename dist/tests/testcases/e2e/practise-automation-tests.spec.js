"use strict";
/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates navigation and functionality on practice-automation.com
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const _PageSetup_1 = require("@PageSetup");
const _AllureMetaData_1 = require("@AllureMetaData");
const HomePage = tslib_1.__importStar(require("../../pages/e2e-testing/practice-automation-pages/home-page"));
const FormFieldsPage = tslib_1.__importStar(require("../../pages/e2e-testing/practice-automation-pages/form-fields-page"));
const PopupsPage = tslib_1.__importStar(require("../../pages/e2e-testing/practice-automation-pages/popups-page"));
const FileUploadPage = tslib_1.__importStar(require("../../pages/e2e-testing/practice-automation-pages/file-upload-page"));
const FileDownloadPage = tslib_1.__importStar(require("../../pages/e2e-testing/practice-automation-pages/file-download-page"));
const BrokenLinksPage = tslib_1.__importStar(require("../../pages/e2e-testing/practice-automation-pages/broken-links-page"));
_PageSetup_1.test.describe('Practice Automation App Tests', () => {
    (0, _PageSetup_1.test)('Navigate to Form Fields page', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('practiceAutomationFormFieldsNavigationTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickFormFieldsLink();
        yield FormFieldsPage.verifyFormFieldsPageURL();
    }));
    (0, _PageSetup_1.test)('Fill and submit form test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('practiceAutomationFormSubmissionTest');
        yield FormFieldsPage.navigateToFormFieldsPage();
        yield FormFieldsPage.fillForm();
        const isFormSubmitted = yield FormFieldsPage.verifyFormSubmission();
        console.assert(isFormSubmitted, 'Form submission failed');
        if (!isFormSubmitted) {
            throw new Error('Form submission failed: Expected success message but did not receive it.');
        }
    }));
    (0, _PageSetup_1.test)('Handle popups test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('practiceAutomationPopupsTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickPopupsLink();
        yield PopupsPage.popupsPageIsDisplayed();
        yield PopupsPage.clickAlertPopupButton();
        yield PopupsPage.dismissAlertPopup();
        yield PopupsPage.clickConfirmPopupButton();
        yield PopupsPage.acceptConfirmPopup();
        yield PopupsPage.verifyConfirmPopupAccepted();
        yield PopupsPage.clickPromptPopupButton();
        yield PopupsPage.verifyPromptPopupText();
        yield PopupsPage.clickTooltipTrigger();
        yield PopupsPage.verifyTooltipText();
    }));
    (0, _PageSetup_1.test)('Upload file test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('practiceAutomationFileUploadTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickFileUploadLink();
        yield FileUploadPage.verifyFileUploadPageURL();
        yield FileUploadPage.uploadFile('tests/test-files/sample.txt');
        yield FileUploadPage.verifyFileUploadSuccess();
    }));
    (0, _PageSetup_1.test)('Download file test', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('practiceAutomationFileDownloadTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickFileDownloadLink();
        yield FileDownloadPage.checkThatFileDownloadPageIsDisplayed();
        yield FileDownloadPage.downloadFile();
    }));
    (0, _PageSetup_1.test)('Verify broken links', () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        (0, _AllureMetaData_1.setupAllure)('practiceAutomationBrokenLinksTest');
        yield HomePage.navigateToHomePage();
        yield HomePage.clickBrokenLinksLink();
        yield BrokenLinksPage.verifyBrokenLinksPageDisplayed();
        yield BrokenLinksPage.clickBrokenLink();
        yield BrokenLinksPage.verifyErrorMessage();
    }));
});
//# sourceMappingURL=practise-automation-tests.spec.js.map