<script lang="ts">
  import { Button } from "szot-ui-experimental";
  import { sites, structSites } from "../Home/components/Portfolio/sites";

  type ISiteShowParams = {
    siteId?: string;
  };

  const allSites = [...sites, ...structSites];

  export let params: ISiteShowParams = {};

  let siteId = 1;
  $: {
    siteId = 1;
    if (params && params.siteId) {
      siteId = allSites.findIndex((site) => site.id === params.siteId);
      if (siteId < 0) {
        siteId = 0;
      }
    }
  }
</script>

<section class="site-show-section">
  <h2 class="site-name">
    {allSites[siteId].name}
  </h2>
  {#if allSites[siteId].defaultImg}
    <img
      src={allSites[siteId].defaultImg}
      alt={`Imagem do site ${allSites[siteId].name}`}
      id={allSites[siteId].id}
      class="site-img"
      class:hidden={allSites[siteId].displayed === false}
    />
  {/if}
  <div class="site-details">
    <div class="site-texts">
      <p class="category-title">Tecnologias:</p>
      <ul>
        {#each allSites[siteId].technologies as technology}
          <li>{technology}</li>
        {/each}
      </ul>

      <div class="about-site-text">
        <p class="category-title">Sobre o projeto:</p>
        <span class="site-description">{allSites[siteId].description}</span>
      </div>
    </div>
    {#if allSites[siteId].url}
      <a class="site-button" href={allSites[siteId].url} target="_blank">
        <Button>Visitar o Site</Button>
      </a>
    {/if}
  </div>
</section>

<style lang="scss">
  @use "src/styles/variables/index.scss" as v;

  .site-show-section {
    @media only screen and (min-width: v.$mobile-devices) {
      --grid-site-details-columns: auto;
    }

    @media only screen and (min-width: v.$tablet-devices) {
      --grid-site-details-columns: 60% 40%;
    }
    .site-name {
      align-self: flex-start;
      padding-bottom: 2rem;
    }

    .site-img {
      min-width: 18.75rem;
      height: 18.75rem;
      margin: 0;
      object-fit: contain;
    }

    color: white;

    min-height: calc(100vh - 5rem - 4rem);
    display: flex;
    flex-direction: column;
    padding: 1rem 10%;

    .site-details {
      text-align: start;
      display: grid;
      grid-template-columns: var(--grid-site-details-columns);

      .site-texts {
        li {
          margin-left: 2rem;
          padding-left: 1rem;
        }

        .category-title {
          font-size: 1.3rem;
          padding: 1rem 0;
          font-weight: 600rem;
        }
      }
      .site-button {
        margin: auto 0 0 auto;
        white-space: nowrap;

        --szot-button-background-color: #354b45;
        --szot-button-color: white;
        --szot-button-border-radius: 15px;
        padding: 1rem 0;
      }
    }
  }
</style>
