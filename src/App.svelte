<script lang="ts">
  import Router, { replace } from "svelte-spa-router";
  import routes, { IRouteLoadingDetail } from "./routes";
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Footer from "./components/Footer/Footer.svelte";

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
  <Footer />
</main>

<svelte:window bind:scrollY={yPosition} />

<style>
  main {
    text-align: center;
    margin: 5rem auto 0;
  }
</style>
