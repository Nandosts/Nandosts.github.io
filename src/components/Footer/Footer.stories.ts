import type { ArgType } from "@storybook/addons";
import Footer from "./Footer.svelte";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: Footer,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});
