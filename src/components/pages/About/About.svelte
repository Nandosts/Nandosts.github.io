<script lang="ts">
  const knownLanguages = [
    "Svelte Js",
    "React Js",
    "Riot JS",
    "React Native",
    "Ionic",
    "Scss",
    "Ruby on rails",
    "Typescript",
    "Docker",
    "Firebase",
    "PostgreSQL",
    "MySQL",
    "Jest",
  ];

  let innerWidth = 0;
  const langLength = knownLanguages.length;

  let shapeSize = 0;
  let shapeTranslate = 0;
  $: if (innerWidth > 750) {
    shapeSize = innerWidth * 0.08;
  } else {
    shapeSize = 75;
  }

  $: shapeTranslate = shapeSize * (langLength / 6) - langLength;

  const angle = 360 / langLength;
</script>

<svelte:window bind:innerWidth />
<section id="about">
  <div class="container">
    <div class="about-text">
      <h3 class="my-history-title">Meu Histórico</h3>
      <p class="my-history-text">
        Entrei na UnB para o curso de engenharia de computação em 2020, onde
        devido à pausa pela pandemia, comecei a aprender desenvolvimento web
        junto com a empresa Júnior Struct. Desenvolvi principalmente em Ruby on
        rails e em React, pegando diversos projetos e até algumas lideranças.
        Estudei com cursos diversos, mas aprendi mais com a prática, e enfim
        entrei no estágio pela empresa VLGI, na área de “desenvolvimento
        mobile”, porém atuando também no desenvolvimento web com stack principal
        de svelte (front-end), jest (testes) e strapi (back-end). <br /> Hoje me
        encontro liderando o front-end de um projeto pela empresa TMTecnologia, em
        periodo parcial junto a um time, no projeto "Labfaz"
      </p>
    </div>
    <div class="stage">
      <!-- adding class "backfaces" allow to see planes from the back -->
      <div
        id="shape"
        class="ring backfaces"
        style={`width: ${shapeSize}px; height: ${shapeSize}px`}
      >
        {#each knownLanguages as language, i}
          <div
            class="plane"
            style={`transform: rotateY(${
              angle * i
            }deg) translateZ(${shapeTranslate}px);
          `}
          >
            {language}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  #about {
    @media (min-width: 0px) {
      --template-columns: 1fr;
      --font-size: 1rem;
    }
    @media (min-width: 750px) {
      --template-columns: 1fr 1fr;
      --font-size: 1.25rem;
    }

    height: calc(100vh - 5rem);
    color: white;
    font-family: sans-serif, Verdana, Arial;
    font-size: var(--font-size);

    padding: 1rem 0;
    .container {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: var(--template-columns);
      justify-content: space-between;
      place-items: center;

      .about-text {
        width: 80%;
        height: 100%;
        text-align: start;
        display: grid;
        grid-template-rows: auto auto;
        place-content: center;

        .my-history-title {
          width: max-content;
          margin: 0.5rem auto;
          font-size: max(1.7vw, 2.5vh);
        }
        .my-history-text {
          font-size: max(1.3vw, 2.1vh);
          line-height: 120%;
        }
      }
    }

    .stage {
      width: 100%;
      height: 100%;
      perspective: 800px;
      perspective-origin: 50% 40%;
      transition: transform 2s;
      transform-style: preserve-3d;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    #shape {
      position: relative;
      margin: 1.5rem auto;
      transform-style: preserve-3d;
    }

    .plane {
      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      height: 100%;
      width: 100%;

      border: 1px solid white;
      border-radius: 0.75rem;

      box-sizing: border-box;

      text-align: center;
      font-family: Times, sans-serif, Arial, Helvetica;
      color: black;

      background-color: rgba(182, 182, 182, 0.95);
      transition: transform 2s, opacity 2s;
      backface-visibility: hidden;
    }

    #shape {
      animation: spin 32s infinite linear;

      &:hover {
        animation-play-state: paused;
      }

      &.backfaces .plane {
        backface-visibility: visible;
      }
    }

    @keyframes spin {
      from {
        transform: rotateY(0);
      }
      to {
        transform: rotateY(-360deg);
      }
    }
  }
</style>
