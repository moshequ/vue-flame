# Vueflame

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

Remove this line after completion: Clone this project and find and replace `vueflame` with your firebase project name (keep the case sensitivity e.g. `vueflame` -> `myproject` and `Vueflame` -> `Myproject` etc.)

Copy [.env.example](.env.example) to `.env` and fill in the values, note that `VITE_FIREBASE_API_KEY` is not the same as `VITE_PROJECT_ID` need to be prefixed with `demo-` [read firebase docs](https://firebase.google.com/docs/emulator-suite/connect_functions#:~:text=Project%20IDs%20for%20demo%20projects,use%20demo%20projects%20wherever%20possible.)

Frontend
```sh
npm run setup
```

Copy `firebase-messaging-sw-*.js` and `manifest.webmanifest` from [dist](dist) folder 
to [public](public) folder (your will need to do that again after each you change those files)

### Run server and Hot-Reload for Development

```sh
npm run emulators:dev
```

### Run server and Minify for Production

```sh
npm run emulators:preview
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run emulators:test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run emulators:test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
# npm run build
npm run emulators:test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Configure GitHub actions (init via Firebase)
Run this `firebase init hosting:github` to regenerate `.github` folder and authorized firebase to deploy to github (delete `.github` folder before running this command

Protect `main` branch (only after initial commit):
* Go to Settings -> Branches -> Add rule (or edit existing rule) -> Add `main` branch
   * check `Require a pull request before merging` -> check `Require approvals` -> choose `1` -> check `Require approval of the most recent reviewable push`
   * check `Require status checks to pass before merging` -> check `Require branches to be up to date before merging`
   * check `Require conversation resolution before merging`
   * check `Require linear history`
   * check `Lock branch`

Automatically delete branch after merge:
* Go to Settings -> check `Automatically delete head branches`

Allow only squash merge:
* Go to Settings -> check `Allow squash merging` -> uncheck `Allow merge commits` -> uncheck `Allow rebase merging`

Allow firebase to deploy:
* Go to Settings -> Actions -> General -> check `Read and write permissions` -> check `Allow GitHub Actions to create and approve pull requests`


### Troubleshooting
If you get 403, PERMISSION_DENIED error when running `npm run emulators:dev`, remove the demo prefix and run `npm run emulators:dev` again
this code is in the `src/firebase-messaging-sw.ts` and in `src/plugins/firebase.ts`
```
if (location?.hostname === 'localhost') {
    firebaseConfig.projectId = 'demo-' + firebaseConfig.projectId
}
```
but then you will need to change it back or firestore UI will not work in the emulator