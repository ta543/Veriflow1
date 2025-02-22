/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates form field interactions on practice-automation.com
 */

import { click, scrollLocatorIntoView, gotoURL } from '@ActionUtils';
import { expectPageToHaveURL } from '@AssertUtils';
import { getLocator, getLocatorByRole } from '@LocatorUtils';
import { FormFieldsCredentials } from '@TestDataPractiseAutomationFormFields';

const formFieldsPageURL = 'https://practice-automation.com/form-fields';
const nameInput = () => getLocator('input[id="name-input"]');
const passwordInput = () => getLocator('input[type="password"]');
const emailInput = () => getLocator('input[name="email"]');
const favoriteDrink = (drink: string) => getLocator(`text=${drink}`);
const favoriteColor = (color: string) => getLocator(`text=${color}`);
const automationDropdown = () => getLocator('select[name="automation"]');
const messageInput = () => getLocator('textarea[name="message"]');
const submitButton = () => getLocatorByRole('button', { name: 'Submit' });

export async function navigateToFormFieldsPage() {
  await gotoURL(formFieldsPageURL);
}

export async function verifyFormFieldsPageURL() {
  await expectPageToHaveURL(/.*form-fields/);
}

export async function fillForm() {
  await nameInput().fill(FormFieldsCredentials.name);
  await passwordInput().fill(FormFieldsCredentials.password);
  await favoriteDrink('Coffee').click();
  await favoriteColor('Blue').click();
  await scrollLocatorIntoView(automationDropdown());
  await automationDropdown().selectOption({ label: 'Yes' });
  await scrollLocatorIntoView(submitButton());
  await emailInput().fill(FormFieldsCredentials.email);
  await messageInput().fill(FormFieldsCredentials.message);
  await click(submitButton());
}

export async function verifyFormSubmission() {
  await scrollLocatorIntoView(messageInput());
  const isMessageCleared = await messageInput().inputValue();
  return isMessageCleared === '';
}
