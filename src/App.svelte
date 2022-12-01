<script lang="ts">
  import Router, { replace } from "svelte-spa-router";
  import {
    register,
    init,
    getLocaleFromNavigator,
    isLoading,
  } from "svelte-i18n";
  import routes from "./routes";
  import type { IRouteLoadingDetail } from "./routes";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Footer from "./components/Footer/Footer.svelte";
  import Loading from "./components/Loading/loading.svelte";

  import LoadSites from "./components/pages/Home/components/Portfolio/sites.svelte";

  let loading = true;
  $: loading = $isLoading;
  register("en", () => import("./en.json"));
  register("en-US", () => import("./en.json"));
  register("pt", () => import("./pt-BR.json"));
  register("pt-BR", () => import("./pt-BR.json"));

  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  init({
    fallbackLocale: "pt-BR",
    initialLocale: getLocaleFromNavigator(),
  });

  function routeLoading(event: CustomEvent) {
    const detail = event.detail as IRouteLoadingDetail;

    // If not hash based, redirect to hash based path
    if (!window.location.hash.startsWith("#/")) {
      // Save query string
      const { search } = window.location;

      // Remove any paths and querystrings
      window.history.replaceState(
        null,
        "",
        `${window.location.origin}${window.location.pathname}`,
      );

      // Go to location with querystring
      replace(detail.location + search).catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
      });
    }
  }
  let yPosition = 0;
</script>

<main>
  {#if $isLoading}
    <Loading />
  {:else}
    <Router {routes} on:routeLoading={routeLoading} />
  {/if}
</main>

<svelte:window bind:scrollY={yPosition} />

<style lang="scss">
  @use "src/styles/variables/index.scss" as v;
  main {
    @media only screen and (min-width: v.$mobile-devices) {
      --app-margin: 0 auto 0;
    }

    @media only screen and (min-width: v.$tablet-devices) {
      --app-margin: 5rem auto 0;
    }
    text-align: center;
    margin: var(--app-margin);
  }
</style>
