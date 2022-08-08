import Notebook from "../../../../../assets/img/notebook-img.svg";
import Luna from "../../../../../assets/img/Luna.jpg";

type SitesCollection = {
  path: string;
  id: string;
  openedImg?: string;
  displayed?: boolean;
};

export const Sites: SitesCollection[] = [
  { path: Notebook, id: "image1", openedImg: Luna },
  { path: Notebook, id: "image2", openedImg: Luna },
  { path: Notebook, id: "image3", openedImg: Luna },
  { path: Notebook, id: "image4", openedImg: Luna },
  { path: Notebook, id: "image5", openedImg: Luna },
  { path: Notebook, id: "image6", openedImg: Luna },
  { path: Notebook, id: "image7", openedImg: Luna },
];
