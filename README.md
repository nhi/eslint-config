# @nhi/eslint-config <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/ESLint_logo.svg/128px-ESLint_logo.svg.png" width=32/>

Shareable ESLint config by [Norsk Helseinformatikk AS](https://nhi.no)

## Usage

Use it in the following type of projects:
- React
- Node.js
- TypeScript


## Installation
1. Open your terminal
2. `cd your-project`
3. Install ESLint and the config itself with yarn or npm
   - `yarn add -D eslint @nhi/eslint-config`
   - `npm i -D eslint @nhi/eslint-config`
4. Add the following to your `package.json`:
   ```json
   "eslintConfig": {
     "extends": "@nhi"
   }
   ```
5. Enjoy! 🎉