/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code CheckboxPage}.
 *
 *
 * VeriFlow Test Automation - The Internet | CheckboxPage
 */

import { click } from '@ActionUtils';
import { getLocatorByXPath } from '@LocatorUtils';

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
