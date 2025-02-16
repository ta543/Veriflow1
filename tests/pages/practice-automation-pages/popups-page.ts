/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates popup handling on practice-automation.com
 */

import { click, acceptAlert, dismissAlert } from '@ActionUtils';
import { expectPageToHaveURL, expectElementToBeVisible } from '@AssertUtils';
import { getLocatorByRole, getLocatorByText } from '@LocatorUtils';

// Locators
const popupsHeading = () => getLocatorByRole('heading', { name: 'Popups' });
const alertPopupButton = () => getLocatorByRole('button', { name: 'Alert Popup' });
const confirmPopupButton = () => getLocatorByRole('button', { name: 'Confirm Popup' });
const promptPopupButton = () => getLocatorByRole('button', { name: 'Prompt Popup' });
const okConfirmText = () => getLocatorByText('OK it is!');
const tooltipTrigger = () => getLocatorByText('<< click me to see a tooltip');
const tooltipText = () => getLocatorByText('Cool text');
const getPromptConfirmText = (inputText: string) => getLocatorByText(`Nice to meet you, ${inputText}!`);

// Methods
export async function navigateToPopupsPage() {
  await click(popupsHeading());
  await expectPageToHaveURL(/.*popups/);
}

export async function verifyPopupsPageDisplayed() {
  await expectElementToBeVisible(popupsHeading());
}

export async function clickAlertPopupButton() {
  await click(alertPopupButton());
}

export async function dismissAlertPopup() {
  await dismissAlert(alertPopupButton());
}

export async function clickConfirmPopupButton() {
  await click(confirmPopupButton());
}

export async function acceptConfirmPopup() {
  await acceptAlert(confirmPopupButton());
}

export async function verifyConfirmPopupAccepted() {
  await expectElementToBeVisible(okConfirmText());
}

export async function clickPromptPopupButton() {
  await click(promptPopupButton());
}

export async function enterPromptPopupInput(inputText) {
  await acceptAlert(promptPopupButton(), inputText);
}

export async function verifyPromptPopupText(inputText) {
  await expectElementToBeVisible(getPromptConfirmText(inputText));
}

export async function clickTooltipTrigger() {
  await click(tooltipTrigger());
}

export async function verifyTooltipText() {
  await expectElementToBeVisible(tooltipText());
}
