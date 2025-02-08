import { click, gotoURL } from '../../src/tobias-playwright/utils/action-utils';
import { expectPageToHaveURL } from '../../src/tobias-playwright/utils/assert-utils';
import { getLocatorByText } from '../../src/tobias-playwright/utils/locator-utils';

const dropdownLink = () => getLocatorByText('Dropdown', { exact: true });
const loginPageLink = () => getLocatorByText('Login Page', { exact: true });
const checkboxesPageLink = () => getLocatorByText('Checkboxes', { exact: true });
const keyPressesPageLink = () => getLocatorByText('Key Presses', { exact: true });

export async function navigateToHomePage() {
  await gotoURL('https://the-internet.herokuapp.com/');
}

export async function verifyHomePageURL() {
  await expectPageToHaveURL(new RegExp('https://the-internet.herokuapp.com/'));
  await dropdownLink().waitFor({ state: 'visible' });
}

export async function clickDropdownLink() {
  await dropdownLink().waitFor({ state: 'visible' });
  await click(dropdownLink());
}

export async function verifyDropdownPageURL() {
  await expectPageToHaveURL(/.*dropdown/);
  await dropdownLink().waitFor({ state: 'visible' });
}

export async function clickLoginPageLink() {
  await loginPageLink().waitFor({ state: 'visible' });
  await click(loginPageLink());
}

export async function verifyLoginPageURL() {
  await expectPageToHaveURL(/.*login/);
  await loginPageLink().waitFor({ state: 'visible' });
}

export async function clickCheckboxesPageLink() {
  await checkboxesPageLink().waitFor({ state: 'visible' });
  await click(checkboxesPageLink());
}

export async function verifyCheckboxesPageURL() {
  await expectPageToHaveURL(/.*checkboxes/);
  await checkboxesPageLink().waitFor({ state: 'visible' });
}

export async function clickKeyPressesPageLink() {
  await keyPressesPageLink().waitFor({ state: 'visible' });
  await click(keyPressesPageLink());
}

export async function verifyKeyPressesPageURL() {
  await expectPageToHaveURL(/.*key_presses/);
  await keyPressesPageLink().waitFor({ state: 'visible' });
}
