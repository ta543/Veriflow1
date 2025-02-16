/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates file uploads on practice-automation.com
 */

import { click, uploadFiles } from '@ActionUtils';
import { expectPageToHaveURL, expectElementToHaveText } from '@AssertUtils';
import { getLocatorByRole, getLocator } from '@LocatorUtils';

// Locators
const fileUploadPageHeading = () => getLocatorByRole('heading', { name: 'File Upload' });
const fileUploadInput = () => getLocator('#file-upload');
const uploadButton = () => getLocatorByRole('button', { name: 'Upload' });
const successMessage = () => getLocatorByRole('status');

// Methods
export async function checkThatFileUploadPageIsDisplayed() {
  await expectElementToBeVisible(fileUploadPageHeading());
}

export async function verifyFileUploadPageURL() {
  await expectPageToHaveURL(/.*file-upload/);
}

export async function uploadFile(filePath: string) {
  await fileUploadInput().click();
  await uploadFiles(fileUploadInput(), filePath);
  await click(uploadButton());
}

export async function verifyFileUploadSuccess() {
  await expectElementToHaveText(successMessage(), 'Thank you for your message. It has been sent.');
}
