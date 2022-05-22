import type { ArgType } from "@storybook/addons";
import Portfolio from "./Portfolio.svelte";

export default {
  title: "pages/Home/Sections/Portfolio",
  component: Portfolio,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: Portfolio,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});
