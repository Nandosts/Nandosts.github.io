import type { ArgType } from "@storybook/addons";
import Navbar from "./Navbar.svelte";

export default {
  title: "Components/Navbar",
  component: Navbar,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: Navbar,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});
