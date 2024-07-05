import { getInput, setOutput, setFailed } from '@actions/core';
import { run } from './github.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

console.log(__dirname);

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
