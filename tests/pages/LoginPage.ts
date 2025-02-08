/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps 
 * on {@code LoginPage}.
 *
 * This follows a structured Page Object Model (POM) to ensure maintainability and reusability.
 *
 * VeriFlow Test Automation - LoginPage
 */

import { click, fill } from '../../src/tobias-playwright/utils/action-utils';
import { getLocatorByText } from '../../src/tobias-playwright/utils/locator-utils';

const usernameField = () => getLocatorByText('Username');
const passwordField = () => getLocatorByText('Password');
const loginButton = () => getLocatorByText('Login', { exact: true });
const successMessage = () => getLocatorByText('You logged into a secure area!');
const logoutButton = () => getLocatorByText('Logout', { exact: true });

export async function login(username: string, password: string) {
  await fill(usernameField(), username);
  await fill(passwordField(), password);
  await click(loginButton());
}

export async function loginSuccessful(): Promise<boolean> {
  return await successMessage().isVisible();
}

export async function logout() {
  await click(logoutButton());
}

export async function logoutSuccessful(): Promise<boolean> {
  return await loginButton().isVisible();
}
