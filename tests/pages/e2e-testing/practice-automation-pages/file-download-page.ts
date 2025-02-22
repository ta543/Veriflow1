/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates file downloads on practice-automation.com
 */

import { click, fill, wait } from '@ActionUtils';
import { expectElementToBeVisible } from '@AssertUtils';
import { getLocator, getLocatorByRole } from '@LocatorUtils';

// Locators
const fileDownloadPageDisplayed = () => getLocatorByRole('heading', { name: 'File Download' });
const downloadLinks = (index: number) => getLocatorByRole('link', { name: 'Download' }).nth(index);

// Methods
export async function checkThatFileDownloadPageIsDisplayed() {
await expectElementToBeVisible(fileDownloadPageDisplayed());
}

export async function downloadFile() {
  await click(downloadLinks(2));
  await wait(500);
  await expectElementToBeVisible(downloadLinks(4));
  await click(downloadLinks(4));
  const passwordFrame = await getLocator('#wpdm-lock-frame').contentFrame();
  const passwordInput = passwordFrame?.getByRole('textbox', { name: 'Enter Password' });
  await expectElementToBeVisible(passwordInput, { timeout: 10000 });
  await passwordInput?.dblclick();
  await fill(passwordInput, 'automateNow');
  const submitButton = passwordFrame?.getByRole('button', { name: 'Submit' });
  await expectElementToBeVisible(submitButton);
  await click(submitButton);
  const downloadReadyText = passwordFrame?.getByText('Your Download Link is Ready');
  await expectElementToBeVisible(downloadReadyText);
  await click(downloadReadyText);
  const closeButton = passwordFrame?.getByRole('button', { name: 'Close' });
  await expectElementToBeVisible(closeButton);
  await click(closeButton);
}
