<script lang="ts">
  import { _ } from "svelte-i18n";
  import { Button } from "szot-ui-experimental";
  import { location, push } from "svelte-spa-router";

  async function changeRoute() {
    if ($location !== "/") {
      await push("/");
    }
  }
</script>

<div class="button">
  <a href="#contact-me" on:click={() => changeRoute()}>
    <Button size="large">{$_("contact_button")}</Button>
  </a>
</div>

<style lang="scss">
  .button {
    white-space: nowrap;

    --szot-button-background-color: #354b45;
    --szot-button-color: white;
    --szot-button-border-radius: 15px;
  }
</style>
