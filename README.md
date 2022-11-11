[![Netlify Status](https://api.netlify.com/api/v1/badges/7f5e8145-0bae-430e-9834-89ba7bab6025/deploy-status)](https://app.netlify.com/sites/regiosports/deploys)

# bk2wi-2022: Sport Events


## Development Requirements

* [Node.js](https://nodejs.org/en/) v18 (LTS version): This has to be installed locally on development computer.
* Recommended IDE Setup
  * [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).
  * install in VS Code: Git Extension Pack
* Modern WebBrowser: Chrome, Firefox, Edge, ...
* Account for [Airtable](https://www.airtable.com)
* [GitHub](https://github.com) Account

To get the project copie in GitHub (Code) the "HTTPS" link.
Then go to the "Clone Repository" and put the link inside the upcomming URL bar.
After that you save the Projekt in a new folder.

## Project setup

Please ask the team for the .env file. Without it no connection to Airtable can be established.



All following commands are executed in project root directory.

To install all required library dependencies:

```sh
npm install
```

**Note:** This has to be done only once or to update (added) dependencies. It will create a sub directory `node_modules` with a lot files.

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Customize configuration

See file [`.env`](.env). To modify it, create a local copy `.env.local`

### Variables

* **VUE_APP_AIRTABLE_BASE:** The coded name of the base.
* **VUE_APP_AIRTABLE_API_KEY:** Generated API-Key to access the base.

---

See also [Configuration Reference](https://cli.vuejs.org/config/) of vue.js.
