
import { getInput, setOutput, setFailed } from '@actions/core';
import { getOctokit } from '@actions/github';

export async function run() {

  // This should be a token with access to your repository scoped in as a secret.
  // The YML workflow will need to set myToken with the GitHub Secret Token
  // myToken: ${{ secrets.GITHUB_TOKEN }}
  // https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token#about-the-github_token-secret
  const myToken = getInput('PAT');
  
  const octokit = getOctokit(myToken)

  // https://octokit.github.io/rest.js/v20#repos-get-content
  const repoContent = await octokit.rest.repos.getContent({
    owner: "dlee242",
    repo: "gha-test-repo",
    path: "",
  });

  console.log(repoContent);

}