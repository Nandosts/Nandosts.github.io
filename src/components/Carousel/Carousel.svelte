<script lang="ts">
  import { flip } from "svelte/animate";
  import { onDestroy } from "svelte";
  import { push } from "svelte-spa-router";

  type SitesCollection = {
    carouselImage: string;
    id: string;
    openedNotebook?: string;
    displayed?: boolean;
  };

  export let sites: SitesCollection[];
  export let horizontalPadding = "100px";
  export let imgWidth = "300px";
  export let imgHeight = "100%";
  export let imgSpacing = "20px";
  export let speed = 500;
  export let controlColor = "#444";
  export let controlScale = 0.5;
  export let autoplay = false;
  export let autoplaySpeed = 5000;
  export let displayControls = true;

  let interval: ReturnType<typeof setInterval>;
  let animationPending = false;
  const rotateLeft = () => {
    if (animationPending === false) {
      animationPending = true;
      sites[sites.length - 1].displayed = false;
      sites = [sites[sites.length - 1], ...sites.slice(0, sites.length - 1)];
      setTimeout(() => {
        sites[0].displayed = true;
        animationPending = false;
      }, speed);
    }
  };

  const rotateRight = () => {
    if (animationPending === false) {
      animationPending = true;
      sites[0].displayed = false;
      sites = [...sites.slice(1, sites.length), sites[0]];
      setTimeout(() => {
        sites[sites.length - 1].displayed = true;
        animationPending = false;
      }, speed);
    }
  };

  const startAutoPlay = (index?: number) => {
    if (autoplay) {
      interval = setInterval(rotateLeft, autoplaySpeed);
    }
    if (index && sites[index]) {
      const oldImg = sites[index].carouselImage;
      const newImg = sites[index].openedNotebook;
      sites[index].carouselImage = newImg;
      sites[index].openedNotebook = oldImg;
    }
  };

  const stopAutoPlay = (index?: number) => {
    if (interval) {
      clearInterval(interval);
    }

    if (index && sites[index] && sites[index].openedNotebook) {
      const oldImg = sites[index].carouselImage;
      const newImg = sites[index].openedNotebook;
      sites[index].carouselImage = newImg;
      sites[index].openedNotebook = oldImg;
    }
  };

  const redirectToSite = async (id: string) => {
    await push(`/Sites/${id}`);
  };

  if (autoplay) {
    startAutoPlay();
  }

  onDestroy(() => {
    stopAutoPlay();
  });
</script>

<div id="carousel-container">
  <div id="carousel-sites" style={`padding-inline: ${horizontalPadding}`}>
    {#each sites as site, i (site.id)}
      <img
        src={site.carouselImage}
        alt={site.id}
        id={site.id}
        class:hidden={site.displayed === false}
        style={`min-width:${imgWidth}; height: ${imgHeight}; margin: 0 ${imgSpacing}; cursor: pointer;`}
        on:mouseenter={() => stopAutoPlay(i)}
        on:mouseleave={() => startAutoPlay(i)}
        on:click={() => redirectToSite(site.id)}
        animate:flip={{ duration: speed }}
      />
    {/each}
  </div>
  {#if displayControls}
    <button id="left" on:click={rotateLeft}>
      <slot name="left-control">
        <svg
          width="66"
          height="46"
          viewBox="0 0 66 46"
          fill="none"
          transform={`rotate(180) scale(${controlScale})`}
        >
          <path
            d="M65.1213 25.1213C66.2929 23.9497 66.2929 22.0503 65.1213 20.8787L46.0294 1.7868C44.8579 0.615223 42.9584 0.615223 41.7868 1.7868C40.6152 2.95837 40.6152 4.85786 41.7868 6.02944L58.7574 23L41.7868 39.9706C40.6152 41.1421 40.6152 43.0416 41.7868 44.2132C42.9584 45.3848 44.8579 45.3848 46.0294 44.2132L65.1213 25.1213ZM0 26H63V20H0V26Z"
            fill={controlColor}
          />
        </svg>
      </slot>
    </button>
    <button id="right" on:click={rotateRight}>
      <slot name="right-control">
        <svg
          width="66"
          height="46"
          viewBox="0 0 66 46"
          fill="none"
          transform={`scale(${controlScale})`}
        >
          <path
            d="M65.1213 25.1213C66.2929 23.9497 66.2929 22.0503 65.1213 20.8787L46.0294 1.7868C44.8579 0.615223 42.9584 0.615223 41.7868 1.7868C40.6152 2.95837 40.6152 4.85786 41.7868 6.02944L58.7574 23L41.7868 39.9706C40.6152 41.1421 40.6152 43.0416 41.7868 44.2132C42.9584 45.3848 44.8579 45.3848 46.0294 44.2132L65.1213 25.1213ZM0 26H63V20H0V26Z"
            fill={controlColor}
          />
        </svg>
      </slot>
    </button>
  {/if}
</div>

<style lang="scss">
  #carousel-container {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
  }
  #carousel-sites {
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    -webkit-mask: linear-gradient(
      to right,
      transparent,
      black 30%,
      black 70%,
      transparent
    );
    mask: linear-gradient(
      to right,
      transparent,
      black 30%,
      black 70%,
      transparent
    );

    img {
      opacity: 1;
      &.hidden {
        opacity: 0;
      }
    }
  }

  button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      outline: auto;
    }
  }

  #left {
    left: 10px;
  }

  #right {
    right: 10px;
  }
</style>
