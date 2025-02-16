/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code ProductsPage}.
 *
 * VeriFlow Test Automation - Automation Exercise | ProductsPage
 */

import { click, fill } from '@ActionUtils';
import { expectElementToBeVisible, expectPageToHaveURL } from '@AssertUtils';
import { getLocator, getLocatorByRole, getLocatorByText } from '@LocatorUtils';

// Locators
const searchInput = () => getLocatorByRole('textbox', { name: 'Search Product' });
const searchButton = () => getLocatorByRole('button', { name: '' });
const firstAddToCartButton = () => getLocator('.overlay-content > .btn').first();
const addedPopupHeading = () => getLocatorByRole('heading', { name: 'Added!' });
const viewCartButton = () => getLocatorByRole('link', { name: 'View Cart' });
const tShirtSearch = () => getLocatorByText('Pure Cotton V-Neck T-Shirt', { exact: true }).first();

// Methods
export async function verifyProductsPageURL() {
  await expectPageToHaveURL(/.*products/);
}

export async function verifytShirtSearchDisplayed() {
  await expectElementToBeVisible(tShirtSearch());
}

export async function searchForProduct(productName: string) {
  await expectElementToBeVisible(searchInput());
  await fill(searchInput(), productName);
  await click(searchButton());
}

export async function clickFirstAddToCartButton() {
  await expectElementToBeVisible(firstAddToCartButton());
  await click(firstAddToCartButton());
}

export async function verifyProductAddedPopup() {
  await expectElementToBeVisible(addedPopupHeading());
}

export async function clickViewCartButton() {
  await expectElementToBeVisible(viewCartButton());
  await click(viewCartButton());
}
