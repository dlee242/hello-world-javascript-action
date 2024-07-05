# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

```yaml
uses: actions/hello-world-javascript-action@e76147da8e5c81eaf017dede5645551d4b94427b
with:
  who-to-greet: 'Mona the Octocat'
```

# Notes

1. Convert from Common JS to ESM by adding "type": "module" to package.json
2. Any files like github with modules need to be imported using .js syntax. e.g. import {foobar} from './github.js'
3. For GitHub Secrets, you have to use libsodium, but with ESM, I couldn't figure out using the libsodium-wrapper package. Instead, I used the tweetsodium package pinned to 0.0.4 since the latest didn't want to play nice with ESM. 
4. Simple mistake and a simple lesson in promises. You have to access the attributes AFTER the promise resolves. const repoKey = await somePromise.data is incorrect. Correct way is const repoKey = (await somePromise).data. 
