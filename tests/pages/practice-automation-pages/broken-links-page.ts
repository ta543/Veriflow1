/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates broken links on practice-automation.com
 */

import { click } from '@ActionUtils';
import { expectPageToHaveURL, expectElementToBeVisible } from '@AssertUtils';
import { getLocatorByText, getLocatorByRole } from '@LocatorUtils';

// Locators
const brokenLinksPageDisplayed = () => getLocatorByRole('heading', { name: 'Broken Links' });
const brokenLink = () => getLocatorByRole('link', { name: 'broken link' });
const errorMessage = () => getLocatorByText('Oops...');

// Methods
export async function verifyBrokenLinksPageDisplayed() {
  await expectElementToBeVisible(brokenLinksPageDisplayed());
}

export async function verifyBrokenLinksPageURL() {
  await expectPageToHaveURL(/.*broken-links/);
}

export async function clickBrokenLink() {
  await click(brokenLink());
}

export async function verifyErrorMessage() {
  await expectElementToBeVisible(errorMessage());
}
