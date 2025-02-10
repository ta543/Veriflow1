import * as cheerio from 'cheerio';
import * as fs from 'fs';
import dotenv from 'dotenv';
import { Octokit } from '@octokit/rest';

// Load environment variables
dotenv.config();

(async function () {
  try {
    // Get the report path from the command-line arguments
    const reportPath = process.argv[2];
    if (!reportPath) {
      throw new Error('Report path not provided. Usage: node post-sanity-report.mjs <reportPath>');
    }

    // Check if the report exists
    if (!fs.existsSync(reportPath)) {
      throw new Error(`Report not found at: ${reportPath}`);
    }

    // Read and parse the report
    const reportContent = fs.readFileSync(reportPath, 'utf-8');

    // Load the HTML content into Cheerio
    const $ = cheerio.load(reportContent);

    // Extract the test summary data
    const testSummary = {
      tests: $('table').find('div:contains("tests")').text().trim(),
      successful: $('table').find('div:contains("successful")').text().trim(),
    };

    const lines = testSummary.tests
      .split('\n')
      .map(line => line.trim())
      .filter(line => line);
    const pass = lines[0] - lines[2] - lines[4];
    const success = testSummary.successful
      .split('\n')
      .map(line => line.trim())
      .filter(line => line);

    console.log(`Total Tests: ${lines[0]}`);
    console.log(`Passed: ${pass}`);
    console.log(`Failed: ${lines[2]}`);
    console.log(`Skipped: ${lines[4]}`);
    console.log(`Duration: ${lines[6]}`);
    console.log(`Successful: ${success[0]}`);

    // Prepare the comment
    const commentBody = `
    Sanity Test Results for ${process.env.DEVICE_PLATFORM} build 🗳️
    - Total Tests: ${lines[0]}
    - Passed: ${pass}
    - Failed: ${lines[2]}
    - Skipped: ${lines[4]}
    - Duration: ${lines[6]}
    - Successful: ${success[0]}
    `;

    // Post the comment to the PR
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN, // GitHub token from workflow secrets
    });

    const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
    const pullRequestNumber = process.env.PR_NUMBER;

    await octokit.issues.createComment({
      owner,
      repo,
      issue_number: pullRequestNumber,
      body: commentBody,
    });

    console.log('Test results posted to the PR successfully!');
  } catch (error) {
    console.error('Error processing TestNG report:', error.message);
    process.exit(1); // Exit with error status
  }
})();
