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

import { getLocatorByCSS, getLocatorByXPath } from '@LocatorUtils';

const keyPressInput = () => getLocatorByCSS('#target');
const resultText = () => getLocatorByXPath('//*[@id="result"]');
const targetElement = () => getLocatorByCSS('#target');

export async function clickOnTargetElement() {
  await targetElement().waitFor({ state: 'visible', timeout: 5000 });
  await targetElement().click();
}

export async function checkThatKeyPressInputIsDisplayed() {
  const inputField = keyPressInput();
  await inputField.waitFor({ state: 'visible', timeout: 5000 });
  console.log('Key Press Input is displayed and ready for interaction');
}

export async function sendKey(key: string) {
  const inputField = keyPressInput();
  await inputField.focus(); // Ensure the input field is focused
  await inputField.press(key);
}

export async function getLastKeyPressed(): Promise<string | null> {
  await resultText().waitFor({ state: 'visible', timeout: 5000 });
  return await resultText().textContent();
}
