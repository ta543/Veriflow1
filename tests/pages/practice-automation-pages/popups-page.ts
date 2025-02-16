/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates popup handling on practice-automation.com
 */

import { click, acceptAlert, dismissAlert } from '@ActionUtils';
import { expectPageToHaveURL, expectElementToBeVisible } from '@AssertUtils';
import { getLocatorByRole, getLocatorByText } from '@LocatorUtils';
import { getText } from '@ElementUtils';


// Locators
const popupsHeading = () => getLocatorByRole('heading', { name: 'Popups' });
const alertPopupButton = () => getLocatorByRole('button', { name: 'Alert Popup' });
const confirmPopupButton = () => getLocatorByRole('button', { name: 'Confirm Popup' });
const promptPopupButton = () => getLocatorByRole('button', { name: 'Prompt Popup' });
const okConfirmText = () => getLocatorByText('OK it is!');
const tooltipTrigger = () => getLocatorByText('<< click me to see a tooltip');
const tooltipText = () => getLocatorByText(`Cool text`);
const getPromptConfirmText = () => getLocatorByText('Fine, be that way...');

// Methods
export async function navigateToPopupsPage() {
  await click(popupsHeading());
  await expectPageToHaveURL(/.*popups/);
}

export async function popupsPageIsDisplayed() {
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

export async function verifyPromptPopupText() {
  const textLocator = getPromptConfirmText();
  await expectElementToBeVisible(textLocator);
}

export async function clickTooltipTrigger() {
  await click(tooltipTrigger());
}

export async function verifyTooltipText() {
  await expectElementToBeVisible(tooltipText());
}
