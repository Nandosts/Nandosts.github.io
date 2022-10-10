<script lang="ts">
  import { _ } from "svelte-i18n";
  import ContactButton from "../../../../ContactButton/ContactButton.svelte";

  import introductionImage from "../../../../../assets/img/introduction-image.svg";
</script>

<svelte:head>
  <link rel="preload" as="image" href={introductionImage} />
</svelte:head>

<section id="introduction">
  <div class="introduction-container">
    <div class="introduction-text">
      <h1>
        {$_("introduction_title_1")}<br />
        {$_("introduction_title_2")}<br />
        {$_("introduction_title_3")}
      </h1>
      <p>
        {$_("introduction_text_1")} <br />
        {$_("introduction_text_2")} <br />
        {$_("introduction_text_3")}
      </p>
      <ContactButton />
    </div>

    <img src={introductionImage} alt="Foto de apresentação" class="img" />
  </div>
</section>

<style lang="scss">
  @use "src/styles/variables/index.scss" as v;

  section {
    @media only screen and (min-width: v.$mobile-devices) {
      --grid-introduction-columns: auto;
    }

    @media only screen and (min-width: v.$tablet-devices) {
      --grid-introduction-columns: 60% 40%;
    }
    display: flex;
    align-items: center;
    min-height: 100vh;
    width: 100%;

    .introduction-container {
      height: 100% !important;

      display: grid;
      place-content: center;
      justify-items: center;
      grid-template-columns: var(--grid-introduction-columns);
    }

    .introduction-text {
      color: white;
      width: 80%;
      height: 100%;
      display: grid;
      grid-template-rows: auto 1fr auto;
      text-align: left;
      align-items: flex-start;
      row-gap: 1rem;

      h1 {
        font-family: "Alfa Slab One";
        font-style: normal;
        font-weight: 800;
        font-size: 3.2rem;
      }

      p {
        font-size: 1.25rem;
        font-size: max(1.4vw, 2.2vh);
        line-height: 120%;
        margin-bottom: 1rem;
      }
    }

    .img {
      width: 100%;
      overflow: hidden;
    }
  }
</style>
