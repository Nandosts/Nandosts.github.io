import Notebook from "../../../../../assets/img/notebook-img.svg";

import LetmeaskNotebook from "../../../../../assets/img/letmeask/letmeask-notebook.svg";
import Letmeask from "../../../../../assets/img/letmeask/letmeask.svg";

import LabfazNotebook from "../../../../../assets/img/labfaz/labfaz-notebook.svg";
import Labfaz from "../../../../../assets/img/labfaz/labfaz.svg";

import CRPNotebook from "../../../../../assets/img/crp/crp-notebook.svg";
import CRP from "../../../../../assets/img/crp/crp.svg";

import MentoringNotebook from "../../../../../assets/img/mentoring-fs/mentoring-fs-notebook.svg";
import Mentoring from "../../../../../assets/img/mentoring-fs/mentoring-fs.svg";

import FestivalCNVNotebook from "../../../../../assets/img/festival-cnv/festival-cnv-notebook.svg";
import FestivalCNV from "../../../../../assets/img/festival-cnv/festival-cnv.svg";

import RessacaTraineeNotebook from "../../../../../assets/img/ressaca-trainee/ressaca-trainee-notebook.svg";
import RessacaTrainee from "../../../../../assets/img/ressaca-trainee/ressaca-trainee.svg";

type SitesCollection = {
  id: string;
  name: string;
  description?: string;
  technologies?: string[];
  url?: string;
  carouselImage: string;
  defaultImg?: string;
  openedNotebook?: string;
  displayed?: boolean;
};

export const sites: SitesCollection[] = [
  {
    id: "1",
    name: "React-NLW-letmeask",
    description: "Site feito junto com o curso Next Level Week",
    url: "https://letmeask-cbfae.web.app/",
    technologies: ["React.js", "Firebase", "Scss", "Typescript"],
    defaultImg: Letmeask,
    carouselImage: Notebook,
    openedNotebook: LetmeaskNotebook,
  },
  {
    id: "2",
    name: "LABFAZ",
    description:
      "Site aprimorado desenvolvido pela TMTecnologia,"
      + "é uma rede de colaboração e inclusão para profissionais de ramos diversos",
    url: "https://labfaz.com.br/",
    technologies: [
      "React JS",
      "ESLint",
      "Cypress",
      "Storybook",
      "Typescript",
      "Jest",
      "Strapi",
      "Postgresql",
      "Docker",
      "Netlify",
    ],
    defaultImg: Labfaz,
    carouselImage: Notebook,
    openedNotebook: LabfazNotebook,
  },
];

export const structSites: SitesCollection[] = [
  {
    id: "201",
    name: "CRP",
    description:
      "Blog personalizado do CRP/DF (Conselho regional de psicologia do DF)",
    url: "https://www.crp-01.org.br/",
    technologies: ["Rails", "Jquery", "Scss", "Javascript"],
    defaultImg: CRP,
    carouselImage: Notebook,
    openedNotebook: CRPNotebook,
  },
  {
    id: "202",
    name: "Mentoring",
    description:
      "Site de Projeto de Mentoria Estudantil em Enfermagem UnB,"
      + "com fins de criar um ambiente de colaboração para"
      + "os estudantes de enfermagem da UnB",
    url: "https://mentoriaenfunb.com.br/",
    technologies: ["Rails", "Jquery", "Scss", "Javascript"],
    defaultImg: Mentoring,
    carouselImage: Notebook,
    openedNotebook: MentoringNotebook,
  },
  {
    id: "203",
    name: "Festival Brasil CNV",
    url: "https://www.festivalbrasilcnv.com.br/",
    technologies: [
      "Rails",
      "Jquery",
      "Bootstrap",
      "Owl Carousel",
      "Scss",
      "Javascript",
    ],
    description:
      "Site para o primeiro festival brasileiro de comunicação não violenta",
    defaultImg: FestivalCNV,
    carouselImage: Notebook,
    openedNotebook: FestivalCNVNotebook,
  },
  {
    id: "204",
    name: "Ressaca Trainee (trainee Struct)",
    description:
      "Site realizado como projeto final do meu trainee no semestre 2020/1",
    technologies: [
      "Rails",
      "Jquery",
      "Figaro",
      "Sorcery",
      "Bootstrap",
      "Owl Carousel",
      "Scss",
      "Javascript",
    ],
    defaultImg: RessacaTrainee,
    carouselImage: Notebook,
    openedNotebook: RessacaTraineeNotebook,
  },
];
