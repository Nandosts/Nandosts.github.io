import type { ArgType } from "@storybook/addons";
import { action } from "@storybook/addon-actions";
import PgRequest from "./PgRequest.svelte";
import userData from "../../../../__fixtures__/userData";

export default {
  title: "Pages/Request",
  component: PgRequest,
  parameters: {
    // remove all stories from creevey screenshot test
    creevey: {
      skip: true,
    },
  },
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: PgRequest,
    props,
    on: {
      getRandomUser: action("getRandomUser"),
    },
  });
  ret.args = _args;

  return ret;
};

export const Default = Template({
  userDataPromise: Promise.resolve(userData),
});

export const Loading = Template({
  userDataPromise: new Promise(() => ""),
});

export const Error = Template({
  userDataPromise: Promise.reject(new TypeError("Failed to fetch")),
});
