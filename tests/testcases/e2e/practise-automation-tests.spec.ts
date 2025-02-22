/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates navigation and functionality on practice-automation.com
 */

import { test } from '@PageSetup';
import { setupAllure } from "@AllureMetaData";
import * as HomePage from '../../pages/e2e-testing/practice-automation-pages/home-page';
import * as FormFieldsPage from '../../pages/e2e-testing/practice-automation-pages/form-fields-page';
import * as PopupsPage from '../../pages/e2e-testing/practice-automation-pages/popups-page';
import * as FileUploadPage from '../../pages/e2e-testing/practice-automation-pages/file-upload-page';
import * as FileDownloadPage from '../../pages/e2e-testing/practice-automation-pages/file-download-page';
import * as BrokenLinksPage from '../../pages/e2e-testing/practice-automation-pages/broken-links-page';

test.describe('Practice Automation App Tests', () => {

  test('Navigate to Form Fields page', async () => {
    setupAllure('practiceAutomationFormFieldsNavigationTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickFormFieldsLink();
    await FormFieldsPage.verifyFormFieldsPageURL();
  });

  test('Fill and submit form test', async () => {
    setupAllure('practiceAutomationFormSubmissionTest');
    await FormFieldsPage.navigateToFormFieldsPage();
    await FormFieldsPage.fillForm();
    const isFormSubmitted = await FormFieldsPage.verifyFormSubmission();
    console.assert(isFormSubmitted, 'Form submission failed');
    if (!isFormSubmitted) {
      throw new Error('Form submission failed: Expected success message but did not receive it.');
    }
  });

  test('Handle popups test', async () => {
    setupAllure('practiceAutomationPopupsTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickPopupsLink();
    await PopupsPage.popupsPageIsDisplayed();

    await PopupsPage.clickAlertPopupButton();
    await PopupsPage.dismissAlertPopup();

    await PopupsPage.clickConfirmPopupButton();
    await PopupsPage.acceptConfirmPopup();
    await PopupsPage.verifyConfirmPopupAccepted();

    await PopupsPage.clickPromptPopupButton();
    await PopupsPage.verifyPromptPopupText();

    await PopupsPage.clickTooltipTrigger();
    await PopupsPage.verifyTooltipText();
  });

  test('Upload file test', async () => {
    setupAllure('practiceAutomationFileUploadTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickFileUploadLink();
    await FileUploadPage.verifyFileUploadPageURL();
    await FileUploadPage.uploadFile('tests/test-files/sample.txt');
    await FileUploadPage.verifyFileUploadSuccess();
  });

  test('Download file test', async () => {
    setupAllure('practiceAutomationFileDownloadTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickFileDownloadLink();
    await FileDownloadPage.checkThatFileDownloadPageIsDisplayed();
    await FileDownloadPage.downloadFile();
  });

  test('Verify broken links', async () => {
    setupAllure('practiceAutomationBrokenLinksTest');
    await HomePage.navigateToHomePage();
    await HomePage.clickBrokenLinksLink();
    await BrokenLinksPage.verifyBrokenLinksPageDisplayed();
    await BrokenLinksPage.clickBrokenLink();
    await BrokenLinksPage.verifyErrorMessage();
  });
});
