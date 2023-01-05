# Hedera SDK JS Standalone Library

This example shows how to build the Hashgraph SDK library as a standalone js.
This is a temporary workaround, waiting for the same feature to be added to the official sdk.

## Project Setup

```sh
npm install
```

### Compile and Minify for production (browser must support type="module")

```sh
npm run build
```

Get and use the generated `dist/assets/hedera-sdk-js-bundle.js` file. See `public/example.html` for an example.

### Compile and Minify for production (lib versions: UMD, UMD minified and CommonJS)

```sh
npm run build:lib
```

Get and use the generated `dist/assets/hedera-sdk-js-bundle.umd.min.js` file. See `public/example-lib.html` for an example.

### Buil and test an example with the browser

```sh
npm run preview
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).
