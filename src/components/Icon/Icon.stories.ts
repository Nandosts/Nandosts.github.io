import type { ArgType } from "@storybook/addons";
import { action } from "@storybook/addon-actions";
import Icon from "./Icon.svelte";
import { IIcons } from "./IIcons";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    onClick: { action: "onClick" },
    iconName: {
      control: {
        type: "select",
        options: Object.values(IIcons),
      },
    },
  },
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: Icon,
    props,
    on: {
      click: action("onClick"),
    },
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({
  iconName: IIcons.plus,
});
