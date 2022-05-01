<script lang="ts">
  import { Button } from "szot-ui-experimental";
  import { link } from "svelte-spa-router";
</script>

<div class="button">
  <a href="/contact" use:link>
    <Button size="large">Entrar em contato</Button>
  </a>
</div>

<style lang="scss">
  .button {
    --szot-button-background-color: linear-gradient(90deg, #354b45, #308472);
    --szot-button-color: white;
    --szot-button-border-radius: 15px;
  }
</style>
