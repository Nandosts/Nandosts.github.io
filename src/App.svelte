<script lang="ts">
  import Router, { replace } from "svelte-spa-router";
  import routes, { IRouteLoadingDetail } from "./routes";
  import Navbar from "./components/Navbar/Navbar.svelte";

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
  <Navbar {yPosition} />
  <Router {routes} on:routeLoading={routeLoading} />
</main>

<svelte:window bind:scrollY={yPosition} />

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
