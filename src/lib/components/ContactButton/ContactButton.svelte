<script lang="ts">
  import { _ } from "svelte-i18n";
  // import { Button } from "szot-ui-experimental";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";

  async function changeRoute() {
    if ($page.url.pathname !== "/") {
      await goto("/");
    }
  }
</script>

<div class="button">
  <a href="#contact-me" on:click={() => changeRoute()}>
    {$_("contact_button")}
  </a>
</div>

<style lang="scss">
  .button {
    white-space: nowrap;

    background-color: #354b45;
    border-radius: 15px;
    padding: 0.6rem 2.3rem;
    width: max-content;

    a {
      text-decoration: none;
      color: white;
    }
  }
</style>
