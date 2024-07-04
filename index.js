import { getInput, setOutput, setFailed } from '@actions/core';
import { context, getOctokit } from '@actions/github';


try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  
  const testInput = getInput('test-input');
  console.log(`Test Input: ${testInput}`);

  const time = (new Date()).toTimeString();
  setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

  // This should be a token with access to your repository scoped in as a secret.
  // The YML workflow will need to set myToken with the GitHub Secret Token
  // myToken: ${{ secrets.GITHUB_TOKEN }}
  // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
  const myToken = getInput('PAT');
  
  const octokit = getOctokit(myToken)
  
  const repoContent = octokit.rest.repos.getContent({
    owner: "dlee242",
    repo: "gha-test-repo",
    path: "",
  });

  console.log(repoContent);
  
  // You can also pass in additional options as a second parameter to getOctokit
  // const octokit = github.getOctokit(myToken, {userAgent: "MyActionVersion1"});
  
  

  console.log(pullRequest);
  
} catch (error) {
  setFailed(error.message);
}
