/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code LoginPage}.
 *
 *
 * VeriFlow Test Automation - LoginPage
 */

import { expectElementToHaveText } from '../../src/tobias-playwright/utils/assert-utils';
import { getLocator } from '../../src/tobias-playwright/utils/locator-utils';

const miniCartCount = () => getLocator(`//*[@id='shopping_cart_container']//span`);

export async function verifyMiniCartCount(expMiniCartCount: string) {
  await expectElementToHaveText(miniCartCount(), expMiniCartCount);
}
