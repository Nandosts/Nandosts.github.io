import type { ArgType } from "@storybook/addons";
import PgResponsiveness from "./PgResponsiveness.svelte";
import { viewportsTests } from "../../../helpers/creeveyHelper";

export default {
  title: "Pages/Responsiveness",
  component: PgResponsiveness,
};

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: PgResponsiveness,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({});

Default.parameters = {
  creevey: {
    tests: {
      ...viewportsTests,
    },
  },
};
