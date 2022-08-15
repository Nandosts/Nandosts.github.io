import type { ArgType } from "@storybook/addons";
import ContactMe from "./ContactMe.svelte";

export default {
  title: "pages/Home/Sections/ContactMe",
  component: ContactMe,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: ContactMe,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});
