import type { ArgType } from "@storybook/addons";
import Carousel from "./Carousel.svelte";
import Empty from "../../assets/img/empty-notebook.svg";
import Notebook from "../../assets/img/notebook-img.svg";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const imageExamples = [
  { defaultImage: Empty, carouselImage: Notebook, id: "501" },
  { defaultImage: Notebook, carouselImage: Empty, id: "502" },
  { defaultImage: Empty, carouselImage: Notebook, id: "503" },
  { defaultImage: Notebook, carouselImage: Empty, id: "504" },
  { defaultImage: Empty, carouselImage: Notebook, id: "505" },
  { defaultImage: Notebook, carouselImage: Empty, id: "506" },
  { defaultImage: Empty, carouselImage: Notebook, id: "507" },
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
  sites: imageExamples,
});
