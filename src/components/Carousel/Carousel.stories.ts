import type { ArgType } from "@storybook/addons";
import Carousel from "./Carousel.svelte";
import Luna from "../../assets/img/Luna.jpg";
import Notebook from "../../assets/img/notebook-img.svg";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const imageExamples = [
  { path: Notebook, id: "image1" },
  { path: Luna, id: "image2" },
  { path: Notebook, id: "image3" },
  { path: Luna, id: "image4" },
  { path: Notebook, id: "image5" },
  { path: Luna, id: "image6" },
  { path: Notebook, id: "image7" },
];

const Template = (_args: ArgType) => {
  const ret = ({ ...props }) => ({
    Component: Carousel,
    props,
  });
  ret.args = _args;
  return ret;
};

export const Default = Template({
  images: imageExamples,
});
