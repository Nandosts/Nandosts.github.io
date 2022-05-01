# Svelte Template

This is a well featured template for [Svelte](https://svelte.dev/) development.
It includes a hash based routing solution, sass and css preprocessors and linting.

## Getting started

### Creating the project

1. Copy the template with git clone:

```sh
# clone recent files
git clone --depth 1 https://gitlab.com/team-tecnologia/templates-and-snippets/svelte-template project-name
# enter the project
cd project-name
# remove git repository
rm -rf .git
```

2. Install the [asdf](https://asdf-vm.com/).

3. Install the [asdf node plugin](https://github.com/asdf-vm/asdf-nodejs).

4. Install the node with asdf:
```sh
asdf install
```

5. Install the node packages:

```sh
npm install
```

### Running the app

```sh
npm run dev   # live reloading mode
npm run build # generate production build
npm run start # serve the production build
npm run test  # run jest tests and snapshot tests
npm run test:ui # run screenshot test with server to view diffs
npm run test:ui-cli # run screenshot test without server (docker must be running)
npm run storybook # run the storybook server (docker must be running)
```

## Configuring the linter for Svelte

Learn to configure the linter to work with your code editor in the
[eslint-plugin-svelte3 integrations page](https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/INTEGRATIONS.md).
You can add linter configurations on the file `.eslintrc.cjs` but be careful and
add Typescript related rules only for typescript.

## TODO

* [ ] Improve linter configurations
* [ ] Add linting for SCSS and CSS
* [ ] Add JS polyfills
