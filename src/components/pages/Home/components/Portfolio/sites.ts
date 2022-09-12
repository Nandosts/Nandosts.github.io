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

import VaiDeFeriasNotebook from "../../../../../assets/img/vai-de-ferias/vai-de-ferias-notebook.svg";
import VaiDeFerias from "../../../../../assets/img/vai-de-ferias/vai-de-ferias.svg";

import VLGIVidaNotebook from "../../../../../assets/img/vlgi-vida/vlgi-vida-notebook.svg";
import VLGIVida from "../../../../../assets/img/vlgi-vida/vlgi-vida.svg";

import SzotUINotebook from "../../../../../assets/img/szot-ui/szot-ui-notebook.svg";
import SzotUI from "../../../../../assets/img/szot-ui/szot-ui.svg";

import EmptyNotebook from "../../../../../assets/img/empty-notebook.svg";

export type SitesCollection = {
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
  {
    id: "3",
    name: "VLGI Vida",
    description:
      "Site desenvolvido pelo grupo sozo, por meio da equipe de tecnologia da empresa VLGI",
    url: "https://vlgivida.com.br/#/",
    technologies: ["Riot JS", "SCSS", "Meiosis JS", "Gitlab CI"],
    defaultImg: VLGIVida,
    carouselImage: Notebook,
    openedNotebook: VLGIVidaNotebook,
  },
  {
    id: "4",
    name: "Szot-UI",
    description:
      "(constantemente em melhorias) Biblioteca para componentes principalmente"
      + "de formulários, realizada na VLGI, desenvolvida em Svelte. Contém"
      + "Componentes como Inputs mascarados, Modais, botões e validação de formulário",
    url: "https://team-tecnologia.gitlab.io/public-pkgs/szot-ui/",
    technologies: [
      "Svelte",
      "ESLint",
      "SCSS",
      "Jest",
      "Creevey",
      "Storybook",
      "Typescript",
      "ionic-core",
    ],
    defaultImg: SzotUI,
    carouselImage: Notebook,
    openedNotebook: SzotUINotebook,
  },
  {
    id: "5",
    name: "Outros Projetos",
    description:
      "Desenvolvi outros projetos que não convém divulgar imagem aqui, mas dentre eles,"
      + "há por exemplo um sistema web e mobile de planejador financeiro, pela VLGI,"
      + "e projetos para estudos de decisão de stack (ionic, react native ou flutter),"
      + "e estudos com testes para decidir melhor plataforma de emails transacionais.",
    technologies: [
      "Svelte",
      "Ionic",
      "React Native",
      "ESLint",
      "SCSS",
      "Jest",
      "Storybook",
      "Typescript",
      "Strapi",
    ],
    carouselImage: Notebook,
    openedNotebook: EmptyNotebook,
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
  {
    id: "205",
    name: "Vai de férias",
    description:
      "Plataforma web desenvolvida para um cliente a fim de permitir a garantia de "
      + "um planejamento de férias, com marcação de hotel, online.",
    url: "https://hotel-frontend-psi.vercel.app/",
    technologies: [
      "React JS",
      "Styled Components",
      "Jest",
      "Rails",
      "PostgreSQL",
      "Devise",
      "Mailjet",
      "Figaro",
      "Pagarme",
    ],
    defaultImg: VaiDeFerias,
    carouselImage: Notebook,
    openedNotebook: VaiDeFeriasNotebook,
  },
];
