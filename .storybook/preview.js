// preview.js

// import global css to be applied to all stories
import "szot-ui-experimental/src/styles/global.scss";
import "../src/styles/global.scss";

import customViewports from "./viewports";
import Wrapper from "./Wrapper.svelte";

export const decorators = [() => Wrapper];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
  creevey: {
    skip: { kinds: /^((?![Pp]ages).)*$/ },
  },
};
