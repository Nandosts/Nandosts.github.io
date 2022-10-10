import type { ArgType } from "@storybook/addons";
import ContactButton from "./ContactButton.svelte";

export default {
  title: "Components/ContactButton",
  component: ContactButton,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: ContactButton,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});
