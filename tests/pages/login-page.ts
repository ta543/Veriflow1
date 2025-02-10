/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 *
 * VeriFlow Test Automation - LoginPage
 */

import { getLocatorByXPath } from '../../src/tobias-playwright/utils/locator-utils';
import { getLocatorByText } from '../../src/tobias-playwright/utils/locator-utils';
import { click } from '../../src/tobias-playwright/utils/action-utils';
import { LoginCredentials } from '../testdata/the-internet-test-data';
import { expectElementToBeVisible } from '../../src/tobias-playwright/utils/assert-utils';
import { getLocatorByRole } from '../../src/tobias-playwright/utils/locator-utils';

const userName = () => getLocatorByXPath("//input[@id='username']");
const passwordField = () => getLocatorByXPath("//input[@id='password']");
const loginButton = () => getLocatorByRole('button', { name: 'Login' });
const errorMessage = `//*[contains(@class,'error-message')]`;
const successMessage = () => getLocatorByText('You logged into a secure area!');
const logoutButton = () => getLocatorByText('Logout', { exact: true });
const logoutMessage = () => getLocatorByXPath('//div[@id="flash"]');
const loginPageHeader = () => getLocatorByXPath("//h2[normalize-space()='Login Page']");

export async function loginSuccessfully() {
  await userName().click();
  await userName().fill(LoginCredentials.username);
  await passwordField().click();
  await passwordField().fill(LoginCredentials.password);
  await loginButton().click();
}

export async function isLoginSuccessful(): Promise<boolean> {
  return await successMessage().isVisible();
}

export async function verifyErrorMessageForFailureLogin() {
  await expectElementToBeVisible(errorMessage);
}

export async function logout() {
  await click(logoutButton());
}

export async function verifyLoginPageIsDisplayed() {
  await loginPageHeader().waitFor({ state: 'visible', timeout: 5000 });
}

export async function isLogoutSuccessful(): Promise<boolean> {
  const isMessageVisible = await logoutMessage().isVisible();
  if (!isMessageVisible) {
    return false;
  }
  const messageText = await logoutMessage().textContent();
  return messageText?.includes('You logged out of the secure area!') || false;
}
