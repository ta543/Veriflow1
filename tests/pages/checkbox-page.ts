/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 *
 * VeriFlow Test Automation - LoginPage
 */

import { click } from '../../src/tobias-playwright/utils/action-utils';
import { getLocatorByXPath } from '../../src/tobias-playwright/utils/locator-utils';

const checkbox1 = () => getLocatorByXPath("//form[@id='checkboxes']/input[1]");
const checkbox2 = () => getLocatorByXPath("//form[@id='checkboxes']/input[2]");

export async function toggleCheckbox(index: number) {
  const checkbox = index === 1 ? checkbox1() : checkbox2();
  await click(checkbox);
}

export async function isCheckboxChecked(index: number): Promise<boolean> {
  const checkbox = index === 1 ? checkbox1() : checkbox2();
  return await checkbox.isChecked();
}
