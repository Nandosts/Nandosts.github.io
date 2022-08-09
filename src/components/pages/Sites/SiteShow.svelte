<script context="module" lang="ts">
  import { Sites } from "../Home/components/Portfolio/sites";

  export interface ISiteShowParams {
    siteId?: string;
  }
</script>

<script lang="ts">
  export let params: ISiteShowParams = {};

  let siteId = 1;
  $: {
    siteId = 1;
    if (params && params.siteId) {
      siteId = parseInt(params.siteId, 10);
      if (siteId < 1) {
        siteId = 1;
      }
    }
  }
</script>

<div>
  <img
    src={Sites[siteId].defaultImg}
    alt={Sites[siteId].id}
    id={Sites[siteId].id}
    class:hidden={Sites[siteId].displayed === false}
    style={"min-width:300px; height: 300px; margin: 0;"}
  />
</div>

<style>
  h1 {
    color: #008cff;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
