import Notebook from "../../../../../assets/img/notebook-img.svg";
import Luna from "../../../../../assets/img/Luna.jpg";

type SitesCollection = {
  carouselImage: string;
  id: string;
  defaultImg?: string;
  displayed?: boolean;
};

export const Sites: SitesCollection[] = [
  { carouselImage: Notebook, id: "image1", defaultImg: Luna },
  { carouselImage: Notebook, id: "image2", defaultImg: Luna },
  { carouselImage: Notebook, id: "image3", defaultImg: Luna },
  { carouselImage: Notebook, id: "image4", defaultImg: Luna },
  { carouselImage: Notebook, id: "image5", defaultImg: Luna },
  { carouselImage: Notebook, id: "image6", defaultImg: Luna },
  { carouselImage: Notebook, id: "image7", defaultImg: Luna },
];
