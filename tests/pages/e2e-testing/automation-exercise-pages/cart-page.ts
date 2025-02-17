/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code CartPage}.
 *
 * VeriFlow Test Automation - Automation Exercise | CartPage
 */

import { expectPageToHaveURL } from '@AssertUtils';
import { getLocatorByText } from '@LocatorUtils';

// Locators
const cartPageVisible = () => getLocatorByText('Shopping Cart', { exact: true });

// Methods
export async function verifyCartPageURL() {
  await expectPageToHaveURL(/.*view_cart/);
  await cartPageVisible().waitFor({ state: 'visible' });
}
