<script lang="ts">
  import ContactButton from "../../../../ContactButton/ContactButton.svelte";

  import introductionImage from "../../../../../assets/img/introduction-image.svg";
</script>

<section id="introduction">
  <div class="introduction-container">
    <div class="introduction-text">
      <h3>Muito prazer, <br /> meu nome é <br /> Fernando Jorge</h3>
      <p>
        Desenvolvedor fullstack, 20 anos, estou cursando Engenharia de
        computação na UnB. <br />
        Procuro oportunidades de aprendizado. <br />
        Comecei aprendendo pela empresa júnior Struct, principalmente em desenvolvimento
        web, estudei e apliquei o desenvolvimento web e mobile na empresa VLGI e
        sigo procurando oportunidades para me aprimorar todos os dias.
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
    min-height: 100vh;
    width: 100%;
  }

  .introduction-container {
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-columns: var(--grid-introduction-columns);
  }

  .introduction-text {
    color: white;
    width: 80%;
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    row-gap: 1rem;

    h3 {
      font-family: "Alfa Slab One";
      font-style: normal;
      font-weight: 800;
      font-size: 3.2rem;
    }

    p {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      text-align: justify;
    }
  }

  .img {
    max-width: 100%;
    overflow: hidden;
  }
</style>
