<script lang="ts">
  import "./styles/global.scss";
  import { Navbar, Footer, Translation } from "$lib/modules/";
  import { register, init, getLocaleFromNavigator, isLoading } from "svelte-i18n";

  import { Loading } from "$lib/components";
  register("en", () => import("$lib/modules/translation/en.json"));
  register("en-US", () => import("$lib/modules/translation/en.json"));
  register("pt", () => import("$lib/modules/translation/pt-BR.json"));
  register("pt-BR", () => import("$lib/modules/translation/pt-BR.json"));

  void init({
    fallbackLocale: "pt-BR",
    initialLocale: getLocaleFromNavigator(),
  });
</script>

{#if $isLoading}
  <Loading />
{:else}
  <Translation />
  <Navbar />
  <div class="page-body">
    <slot />
  </div>
  <Footer />
{/if}

<style lang="scss">
  .page-body {
    margin-top: 4.5rem;
  }
</style>
