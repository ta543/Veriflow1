/**
 * (C) VeriFlow 2025 - Practice Automation Tests
 * This test suite validates navigation on practice-automation.com
 */

import { click, gotoURL, scrollLocatorIntoView } from '@ActionUtils';
import { expectPageToHaveURL } from '@AssertUtils';
import { getLocatorByText } from '@LocatorUtils';

const homePageURL = 'https://practice-automation.com/';

const formFieldsLink = () => getLocatorByText('Form Fields', { exact: true });
const popupsLink = () => getLocatorByText('Popups', { exact: true });
const slidersLink = () => getLocatorByText('Sliders', { exact: true });
const calendarsLink = () => getLocatorByText('Calendars', { exact: true });
const modalsLink = () => getLocatorByText('Modals', { exact: true });
const fileUploadLink = () => getLocatorByText('File Upload', { exact: true });
const fileDownloadLink = () => getLocatorByText('File Download', { exact: true });
const brokenLinksLink = () => getLocatorByText('Broken Links', { exact: true });

export async function navigateToHomePage() {
  await gotoURL(homePageURL);
}

export async function verifyHomePageURL() {
  await expectPageToHaveURL(new RegExp(homePageURL));
}

export async function clickFormFieldsLink() {
  await click(formFieldsLink());
}

export async function clickPopupsLink() {
  await click(popupsLink());
}

export async function clickSlidersLink() {
  await click(slidersLink());
}

export async function clickCalendarsLink() {
  await click(calendarsLink());
}

export async function clickModalsLink() {
  await click(modalsLink());
}

export async function clickFileUploadLink() {
  await scrollLocatorIntoView(fileUploadLink());
  await click(fileUploadLink());
}

export async function clickFileDownloadLink() {
  await scrollLocatorIntoView(fileDownloadLink());
  await click(fileDownloadLink());
}

export async function clickBrokenLinksLink() {
  await scrollLocatorIntoView(brokenLinksLink());
  await click(brokenLinksLink());
}
