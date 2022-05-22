<script lang="ts">
  import Carousel from "../../../../Carousel/Carousel.svelte";

  import Notebook from "../../../../../assets/img/notebook-img.svg";

  const images = [
    { path: Notebook, id: "image1" },
    { path: Notebook, id: "image2" },
    { path: Notebook, id: "image3" },
    { path: Notebook, id: "image4" },
    { path: Notebook, id: "image5" },
    { path: Notebook, id: "image6" },
    { path: Notebook, id: "image7" },
  ];
</script>

<section id="portfolio">
  <div class="portfolio-container">
    <span class="title"> Portfólio </span>
    <div class="portfolio-carousel">
      <Carousel
        {images}
        imageWidth={"30%"}
        imageHeight={"300px"}
        imageSpacing={"2rem"}
        controlColor={"white"}
        controlScale={0.8}
        displayControls={true}
        autoplay={true}
        autoplaySpeed={3000}
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

    .portfolio-carousel {
      width: 100%;
      padding: 2rem 0;
    }
  }
</style>
