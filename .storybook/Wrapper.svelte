<script>
  import { addMessages, init, getLocaleFromNavigator, isLoading } from "svelte-i18n";

  import en from "../src/en.json"
  import pt from "../src/pt-BR.json"

  addMessages("en", en);
  addMessages("en-US", en);
  addMessages("pt", pt);
  addMessages("pt-BR", pt);

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
</script>

{#if $isLoading}
  Please wait...
{:else}
  <slot />
{/if}
