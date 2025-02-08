/**
 * (C) VeriFlow 2025
 *
 * This test suite validates navigation and functionality across multiple pages
 * including Dropdown, Login, Checkbox, and Key Press pages.
 *
 * VeriFlow Test Automation - The Internet Tests
 */

import { test } from '../../src/tobias-playwright/setup/page-setup';
import { logTestDetails as logMetadataDetails } from '../../src/tobias-playwright/utils/test-metadata';
import {
  navigateToHomePage,
  clickDropdownLink,
  clickLoginPageLink,
  clickCheckboxesPageLink,
  clickKeyPressesPageLink,
} from '../pages/HomePage';
import {
  navigateToDropdownPage,
  verifyDropdownPageURL,
  selectDropdownOption,
  verifyDropdownOptionSelected,
} from '../pages/DropdownPage';
import { login, loginSuccessful, logout, logoutSuccessful } from '../pages/LoginPage';
import { toggleCheckbox, isCheckboxChecked } from '../pages/CheckboxPage';
import {
  checkThatKeyPressInputIsDisplayed,
  sendKey,
  getLastKeyPressed,
} from '../pages/KeyPressPage';

test.describe('The Internet App Tests', () => {
  test('Dropdown test', async () => {
    logMetadataDetails('dropdownTest');
  
    await navigateToHomePage();
    await clickDropdownLink();
    await navigateToDropdownPage();
    await verifyDropdownPageURL();
    await selectDropdownOption(2);
    const isSelectedOption2 = await verifyDropdownOptionSelected(2);
    console.assert(isSelectedOption2, 'Dropdown selection failed for option 2');
    await selectDropdownOption(3);
    const isSelectedOption3 = await verifyDropdownOptionSelected(3);
    console.assert(isSelectedOption3, 'Dropdown selection failed for option 3');
  });

  test('Login test - successful login', async () => {
    logMetadataDetails('loginTest');
  
    await navigateToHomePage();
    await clickLoginPageLink();
    await login('tomsmith', 'SuperSecretPassword!');
  
    const isLoginSuccessful = await loginSuccessful();
    console.assert(isLoginSuccessful, 'Login failed: User was not authenticated successfully');
  
    if (!isLoginSuccessful) {
      throw new Error('Login failed: Expected the user to be authenticated, but it was not.');
    }
  });    

  test('Logout test - successful logout', async () => {
    logMetadataDetails('logoutTest');

    await navigateToHomePage();
    await clickLoginPageLink();
    await login('tomsmith', 'SuperSecretPassword!');
    await logout();
    
    const isLogoutSuccessful = await logoutSuccessful();
    console.assert(isLogoutSuccessful, 'Logout failed: User is still logged in');
    
    if (!isLogoutSuccessful) {
      throw new Error('Logout failed: Expected the user to be logged out, but they were not.');
    }
    });

  test('Checkbox test', async () => {
    logMetadataDetails('checkboxTest');

    await navigateToHomePage();
    await clickCheckboxesPageLink();
    await toggleCheckbox(1);
    await toggleCheckbox(2);
    
    const isCheckbox1Checked = await isCheckboxChecked(1);
    console.assert(isCheckbox1Checked, 'Checkbox 1 toggle failed: It should be checked');
    
    if (!isCheckbox1Checked) {
      throw new Error('Checkbox 1 toggle failed: Expected it to be checked, but it was not.');
    }
    
    const isCheckbox2Checked = await isCheckboxChecked(2);
    console.assert(!isCheckbox2Checked, 'Checkbox 2 toggle failed: It should be unchecked');
    
    if (isCheckbox2Checked) {
      throw new Error('Checkbox 2 toggle failed: Expected it to be unchecked, but it was still checked.');
    }
    });

  test('Key presses test', async () => {
    logMetadataDetails('keyPressTest');
  
    await navigateToHomePage();
    await clickKeyPressesPageLink();
    await checkThatKeyPressInputIsDisplayed();
    
    await sendKey('W');
    const resultW = await getLastKeyPressed();
    console.assert(resultW?.includes('You entered: W'), `Key press failed: Expected "You entered: W", but got "${resultW}"`);
    
    if (!resultW?.includes('You entered: W')) {
      throw new Error(`Key press failed: Expected "You entered: W", but got "${resultW}"`);
    }
    
    await sendKey('A');
    const resultA = await getLastKeyPressed();
    console.assert(resultA?.includes('You entered: A'), `Key press failed: Expected "You entered: A", but got "${resultA}"`);
    
    if (!resultA?.includes('You entered: A')) {
      throw new Error(`Key press failed: Expected "You entered: A", but got "${resultA}"`);
    }
    });
});
