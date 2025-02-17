"use strict";
/**
 * global-setup.ts: This module is responsible for setting up the global state before all tests start.
 * It includes a default export function that runs before all tests, setting up any necessary global context.
 * By centralizing these setup operations, it ensures a consistent starting point for all tests, improving test reliability.
 * You can add any initialization setup code within this function.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const child_process_1 = require("child_process");
function globalSetup() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log("🔄 Moving old Allure results to history...");
        (0, child_process_1.execSync)("bash prepare-allure.sh", { stdio: "inherit" });
        console.log("✅ Allure results cleaned. Ready for test execution.");
    });
}
exports.default = globalSetup;
//# sourceMappingURL=global-setup.js.map