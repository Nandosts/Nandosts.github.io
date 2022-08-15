import type { ArgType } from "@storybook/addons";
import About from "./About.svelte";

export default {
  title: "Pages/About",
  component: About,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: About,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});
