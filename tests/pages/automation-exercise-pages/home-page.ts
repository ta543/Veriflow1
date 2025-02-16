/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code HomePage}.
 *
 * VeriFlow Test Automation - Automation Exercise | HomePage
 */

import { acceptConsentIfVisible, click, gotoURL, wait } from '@ActionUtils';
import { expectPageToHaveURL } from '@AssertUtils';
import { getLocatorByText } from '@LocatorUtils';

const homePageURL = 'https://www.automationexercise.com/';

// Locators
const productsLink = () => getLocatorByText(' Products', { exact: true });
const cartLink = () => getLocatorByText('Cart', { exact: true });
const loginPageLink = () => getLocatorByText('Signup / Login', { exact: true });
const contactUsLink = () => getLocatorByText('Contact us', { exact: true });
const testCasesLink = () => getLocatorByText('Test Cases', { exact: true });

// Methods
export async function navigateToHomePage() {
  await gotoURL(homePageURL);
  await wait(1000);
  await acceptConsentIfVisible();
}

export async function verifyHomePageURL() {
  await expectPageToHaveURL(new RegExp(homePageURL));
}

export async function clickProductsLink() {
  await click(productsLink());
}

export async function verifyProductsPageURL() {
  await expectPageToHaveURL(/.*products/);
  await productsLink().waitFor({ state: 'visible' });
}

export async function clickCartLink() {
  await cartLink().waitFor({ state: 'visible' });
  await click(cartLink());
}

export async function verifyCartPageURL() {
  await expectPageToHaveURL(/.*view_cart/);
  await cartLink().waitFor({ state: 'visible' });
}

export async function clickLoginPageLink() {
  await loginPageLink().waitFor({ state: 'visible' });
  await click(loginPageLink());
}

export async function verifyLoginPageURL() {
  await expectPageToHaveURL(/.*login/);
  await loginPageLink().waitFor({ state: 'visible' });
}

export async function clickContactUsLink() {
  await contactUsLink().waitFor({ state: 'visible' });
  await click(contactUsLink());
}

export async function verifyContactUsPageURL() {
  await expectPageToHaveURL(/.*contact_us/);
  await contactUsLink().waitFor({ state: 'visible' });
}

export async function clickTestCasesLink() {
  await testCasesLink().waitFor({ state: 'visible' });
  await click(testCasesLink());
}

export async function verifyTestCasesPageURL() {
  await expectPageToHaveURL(/.*test_cases/);
  await testCasesLink().waitFor({ state: 'visible' });
}
