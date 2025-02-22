/**
 * global-setup.ts: This module is responsible for setting up the global state before all tests start.
 * It includes a default export function that runs before all tests, setting up any necessary global context.
 * By centralizing these setup operations, it ensures a consistent starting point for all tests, improving test reliability.
 * You can add any initialization setup code within this function.
 */

import { execSync } from 'child_process';

async function globalSetup() {
  console.log("🔄 Moving old Allure results to history...");
  execSync("bash prepare-allure.sh", { stdio: "inherit" });

  console.log("✅ Allure results cleaned. Ready for test execution.");
}

export default globalSetup;
