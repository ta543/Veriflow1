"use strict";
/**
 * custom-logger.ts: This module provides a custom logger for Playwright tests. It implements the Reporter interface from Playwright
 * and uses the Winston logging library to provide detailed logs for test execution. The logger includes custom colors
 * for different log levels and can be configured to log to the console or a file.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const tslib_1 = require("tslib");
const winston_1 = tslib_1.__importDefault(require("winston"));
/**
 * Custom colors for the logger
 */
const customColors = {
    info: 'blue',
    error: 'red',
};
winston_1.default.addColors(customColors);
/**
 * Logger configuration
 */
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: winston_1.default.format.combine(winston_1.default.format.colorize({ all: true }), winston_1.default.format.timestamp(), winston_1.default.format.printf(({ timestamp, level, message }) => {
        return `${timestamp} [${level}]: ${message}`;
    })),
    transports: [
        new winston_1.default.transports.Console(),
        // If you want to log to a file uncomment below line
        // new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
    ],
});
/**
 * CustomLogger class that implements the Reporter interface from Playwright
 */
class CustomLogger {
    /**
     * Logs the start of a test case
     * @param {TestCase} test - The test case that is starting
     */
    onTestBegin(test) {
        exports.logger.info(`Test Case Started : ${test.title}`);
    }
    /**
     * Logs the end of a test case
     * @param {TestCase} test - The test case that ended
     * @param {TestResult} result - The result of the test case
     */
    onTestEnd(test, result) {
        if (result.status === 'passed') {
            exports.logger.info(`\x1b[32mTest Case Passed : ${test.title}\x1b[0m`); // Green color
        }
        else if (result.status === 'skipped') {
            exports.logger.info(`\x1b[33mTest Case Skipped : ${test.title}\x1b[0m`); // Yellow color
        }
        else if (result.status === 'failed' && result.error) {
            // Playwright inbuild reporter logs the error
            // logger.error(
            //   `Test Case Failed: ${test.title} Error: ${result.error.message}`,
            // );
        }
    }
    /**
     * Logs an error
     * @param {TestError} error - The error
     */
    onError(error) {
        exports.logger.error(error.message);
    }
}
exports.default = CustomLogger;
//# sourceMappingURL=custom-logger.js.map