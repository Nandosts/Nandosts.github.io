<script lang="ts">
  import Carousel from "../../../../Carousel/Carousel.svelte";

  import { sites, structSites } from "./sites";
</script>

<section id="portfolio">
  <div class="portfolio-container">
    <span class="title"> Portifólio </span>
    <div class="portfolio-carousel">
      <Carousel
        {sites}
        imgWidth={"300px"}
        imgHeight={"300px"}
        imgSpacing={"2rem"}
        controlColor={"white"}
        controlScale={0.8}
        displayControls={true}
        autoplay={true}
        autoplaySpeed={5000}
      />
    </div>

    <span class="title">
      Participações na <a class="struct-title" href="http://struct.unb.br"
        >Struct (EJ)</a
      >
    </span>
    <div class="portfolio-carousel">
      <Carousel
        sites={structSites}
        imgWidth={"30%"}
        imgHeight={"300px"}
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

      &::after {
        content: "";
        width: 10rem;
        height: 2px;
        display: block;
        background: white;
      }
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
