/**
 * (C) VeriFlow 2025
 *
 * The purpose of this class is to manage all methods that will handle the execution of test steps
 * on {@code KeyPressPage}.
 *
 * This file follows a structured Page Object Model (POM) to ensure maintainability and reusability.
 *
 * VeriFlow Test Automation - KeyPressPage
 */

import { getLocatorByText } from '../../src/tobias-playwright/utils/locator-utils';

const keyPressInput = () => getLocatorByText('Key Press Input');
const resultText = () => getLocatorByText('Result');

export async function checkThatKeyPressInputIsDisplayed() {
  await keyPressInput().waitFor({ state: 'visible', timeout: 5000 });
}

export async function sendKey(key: string) {
  await keyPressInput().waitFor({ state: 'visible', timeout: 5000 });
  await keyPressInput().click();
  await keyPressInput().press(key);
}

export async function getLastKeyPressed(): Promise<string | null> {
  await resultText().waitFor({ state: 'visible', timeout: 5000 });
  return await resultText().textContent();
}
