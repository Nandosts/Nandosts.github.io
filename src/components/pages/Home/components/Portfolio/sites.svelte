<script lang="ts" context="module">
  import { onMount } from "svelte";

  import { writable } from "svelte/store";
  import { _ } from "svelte-i18n";
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
  export let sites = writable([]);
  export let setSites = () => undefined;

  export let structSites = writable([]);
</script>

<script lang="ts">
  setSites = () => {
    sites.set([
      {
        id: "1",
        name: "React-NLW-letmeask",
        description: $_("letmeask"),
        url: "https://letmeask-cbfae.web.app/",
        technologies: ["React.js", "Firebase", "Scss", "Typescript"],
        defaultImg: Letmeask,
        carouselImage: Notebook,
        openedNotebook: LetmeaskNotebook,
      },
      {
        id: "2",
        name: "LABFAZ",
        description: $_("labfaz"),
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
        description: $_("vlgi-vida"),
        url: "https://vlgivida.com.br/#/",
        technologies: ["Riot JS", "SCSS", "Meiosis JS", "Gitlab CI"],
        defaultImg: VLGIVida,
        carouselImage: Notebook,
        openedNotebook: VLGIVidaNotebook,
      },
      {
        id: "4",
        name: "Szot-UI",
        description: $_("szot-ui"),
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
        description: $_("others"),
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
    ]);

    structSites.set([
      {
        id: "201",
        name: "CRP",
        description: $_("crp"),
        url: "https://www.crp-01.org.br/",
        technologies: ["Rails", "Jquery", "Scss", "Javascript"],
        defaultImg: CRP,
        carouselImage: Notebook,
        openedNotebook: CRPNotebook,
      },
      {
        id: "202",
        name: "Mentoring",
        description: $_("mentoring"),
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
        description: $_("festival-brasil-cnv"),
        defaultImg: FestivalCNV,
        carouselImage: Notebook,
        openedNotebook: FestivalCNVNotebook,
      },
      {
        id: "204",
        name: "Ressaca Trainee (trainee Struct)",
        description: $_("ressaca-trainee"),
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
        description: $_("vai-de-ferias"),
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
    ]);
  };

  onMount(() => {
    setSites();
  });
</script>
