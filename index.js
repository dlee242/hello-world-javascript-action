import { getInput, setOutput, setFailed } from '@actions/core';
import { run } from './github.js';
import { getGlobals } from 'common-es'
var { __dirname, __filename } = getGlobals(import.meta.url)

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  
  const testInput = getInput('test-input');
  console.log(`Test Input: ${testInput}`);

  const time = (new Date()).toTimeString();
  setOutput("time", time);
  run();

} catch (error) {
  setFailed(error.message);
}
