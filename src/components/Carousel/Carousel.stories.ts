import type { ArgType } from "@storybook/addons";
import Carousel from "./Carousel.svelte";
import Luna from "../../assets/img/Luna.jpg";
import Notebook from "../../assets/img/notebook-img.svg";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

const imageExamples = [
  { carouselImage: Notebook, id: "image1" },
  { carouselImage: Luna, id: "image2" },
  { carouselImage: Notebook, id: "image3" },
  { carouselImage: Luna, id: "image4" },
  { carouselImage: Notebook, id: "image5" },
  { carouselImage: Luna, id: "image6" },
  { carouselImage: Notebook, id: "image7" },
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
