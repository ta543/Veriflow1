/**
 * (C) VeriFlow 2025
 *
 * The purpose of this module is to manage all functions handling test steps
 * on {@code ContactUsPage}.
 *
 * VeriFlow Test Automation - Automation Exercise | ContactUsPage
 */

import { click, fill } from '@ActionUtils';
import { expectElementToBeVisible, expectPageToHaveURL } from '@AssertUtils';
import { getLocatorByRole } from '@LocatorUtils';
import { ContactFormData } from '@TestDataAutomationExercise';

// Locators
const contactUsHeading = () => getLocatorByRole("heading", { name: "GET IN TOUCH" });
const contactUsLink = () => getLocatorByRole("link", { name: " Contact us" });
const nameInput = () => getLocatorByRole("textbox", { name: "Name" });
const emailInput = () => getLocatorByRole("textbox", { name: "Email", exact: true });
const subjectInput = () => getLocatorByRole("textbox", { name: "Subject" });
const messageTextArea = () => getLocatorByRole("textbox", { name: "Your Message Here" });
const submitButton = () => getLocatorByRole("button", { name: "Submit" });
const homeButton = () => getLocatorByRole("link", { name: "Home" });

// Methods
export async function navigateToContactUsPage() {
  await click(contactUsLink());
}

export async function verifyContactUsPageURL() {
  await expectPageToHaveURL(/.*contact_us/);
  await expectElementToBeVisible(contactUsHeading());
}

export async function fillContactForm() {
  await fill(nameInput(), ContactFormData.validSubmission.name);
  await fill(emailInput(), ContactFormData.validSubmission.email);
  await fill(subjectInput(), ContactFormData.validSubmission.subject);
  await fill(messageTextArea(), ContactFormData.validSubmission.message);
}

export async function submitContactForm() {
  await expectElementToBeVisible(submitButton());
  await click(submitButton());
}

export async function returnToHomePage() {
  await click(homeButton());
  await expectPageToHaveURL('https://www.automationexercise.com/');
}
