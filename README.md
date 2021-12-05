# @mcmunder/eslint-config

Sharable eslint config for usage in JavaScript/TypeScript, React + emotion projects. Includes all necessary configs and plugins.

## Usage

```bash
npm install --save-dev @mcmunder/eslint-config
```

Then create an `.eslintrc.js` file in the project root with the following content:

```js
module.exports = {
  extends: '@mcmunder/eslint-config',
  // add overrides if you want
}
```