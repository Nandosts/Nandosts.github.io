<script context="module" lang="ts">
  import { sites } from "../Home/components/Portfolio/sites";

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
      siteId = parseInt(params.siteId, 10) - 1;
      if (siteId < 0) {
        siteId = 0;
      }
    }
  }
</script>

<div>
  <img
    src={sites[siteId].defaultImg}
    alt={sites[siteId].id}
    id={sites[siteId].id}
    class:hidden={sites[siteId].displayed === false}
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
