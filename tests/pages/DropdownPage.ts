import { gotoURL, selectByIndex } from '../../src/tobias-playwright/utils/action-utils';
import { expectPageToHaveURL } from '../../src/tobias-playwright/utils/assert-utils';
import { getLocatorByXPath } from '../../src/tobias-playwright/utils/locator-utils';

const dropdownSelect = () => getLocatorByXPath('//*[@id="dropdown"]');

export async function navigateToDropdownPage() {
  await gotoURL('https://the-internet.herokuapp.com/dropdown');
  await dropdownSelect().waitFor({ state: 'visible' });
}

export async function verifyDropdownPageURL() {
  await expectPageToHaveURL(/.*dropdown/);
  await dropdownSelect().waitFor({ state: 'visible' });
}

export async function selectDropdownOption(optionIndex: number) {
  await dropdownSelect().waitFor({ state: 'visible' });
  await selectByIndex(dropdownSelect(), optionIndex - 1);
}

export async function verifyDropdownOptionSelected(optionIndex: number) {
  await dropdownSelect().waitFor({ state: 'visible' });
  const selectedValue = await dropdownSelect().inputValue();
  return selectedValue === (optionIndex - 1).toString();
}
