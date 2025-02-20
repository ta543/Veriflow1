import { Octokit } from '@octokit/rest';
import fs from 'fs';

// Initialize Octokit with authentication
const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN, // GitHub token from workflow secrets
});

const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
const pullRequestNumber = process.env.PR_NUMBER;

fetchPRConversationDetails(owner, repo, pullRequestNumber);

// Function to fetch PR conversation details
async function fetchPRConversationDetails(owner, repo, pull_number) {
  try {
    // Fetch comments on the PR
    const { data: comments } = await octokit.issues.listComments({
      owner,
      repo,
      issue_number: pull_number,
    });

    // Filter comments based on a keyword
    const desiredComments = comments.filter(comment => comment.body.includes("Workflow Run ID"));

    console.log("Comments:");
    desiredComments.forEach(comment => console.log(`- ${comment.body}`));

    // Store run id in text file
    if (desiredComments.length > 0) {
      const desiredComment = desiredComments[0].body;
      const numbers = desiredComment.match(/\d+/g);
      fs.writeFileSync('build_run_id.txt', numbers.join('\n'));
      console.log(`Stored run id in build_run_id.txt`);
    } else {
      console.log('No matching comments found.');
    }

  } catch (error) {
    console.error('Error fetching PR conversation details:', error.message);
  }
}
