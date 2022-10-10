import type { ArgType } from "@storybook/addons";
import Introduction from "./Introduction.svelte";

export default {
  title: "pages/Home/Sections/Introduction",
  component: Introduction,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: Introduction,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});
