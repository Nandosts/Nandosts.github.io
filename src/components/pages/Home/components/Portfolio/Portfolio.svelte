<script lang="ts">
  import { _ } from "svelte-i18n";
  import Carousel from "../../../../Carousel/Carousel.svelte";

  import { sites, structSites } from "./sites.svelte";
</script>

<section id="portfolio">
  <div class="portfolio-container">
    <span class="title">{$_("nav_portfolio")}</span>
    <div class="portfolio-carousel">
      <Carousel
        sites={$sites}
        imgWidth={"275px"}
        imgHeight={"275px"}
        imgSpacing={"2rem"}
        controlColor={"white"}
        controlScale={0.8}
        displayControls={true}
        autoplay={true}
        autoplaySpeed={5000}
      />
    </div>

    <span class="title">
      {$_("portfolio_title_2")}
      <a class="struct-title" href="http://struct.unb.br" target="_blank">
        Struct (EJ)
      </a>
    </span>
    <div class="portfolio-carousel">
      <Carousel
        sites={$structSites}
        imgWidth={"275px"}
        imgHeight={"275px"}
        imgSpacing={"2rem"}
        controlColor={"white"}
        controlScale={0.8}
        displayControls={true}
        autoplay={true}
        autoplaySpeed={5000}
      />
    </div>
  </div>
</section>

<style lang="scss">
  .portfolio-container {
    margin-top: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      color: white;
    }

    .struct-title {
      color: #009bf2;
    }

    .portfolio-carousel {
      width: 100%;
      padding: 2rem 0;
    }
  }
</style>
