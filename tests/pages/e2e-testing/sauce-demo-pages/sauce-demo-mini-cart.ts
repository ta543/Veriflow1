/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code SauceDemoMiniCartPage}.
 *
 * VeriFlow Test Automation - Sauce Demo | SauceDemoMiniCartPage
 */

import { expectElementToHaveText } from '@AssertUtils';
import { getLocator } from '@LocatorUtils';

const miniCartCount = () => getLocator(`//*[@id='shopping_cart_container']//span`);

export async function verifyMiniCartCount(expMiniCartCount: string) {
  await expectElementToHaveText(miniCartCount(), expMiniCartCount);
}
