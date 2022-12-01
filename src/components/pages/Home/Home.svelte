<script lang="ts">
  import { Button } from "szot-ui-experimental";

  // eslint-disable-next-line radix
  let count = parseInt(localStorage.getItem("numero")) || 0;

  function setCount() {
    localStorage.setItem("numero", count.toString());
  }

  function adiciona1() {
    count += 1;
    setCount();
  }

  function adiciona3() {
    count += 3;
    setCount();
  }

  function adiciona5() {
    count += 5;
    setCount();
  }

  function adiciona10() {
    count += 10;
    setCount();
  }

  function adiciona15() {
    count += 15;
    setCount();
  }

  function zerarPontos() {
    count = 0;
    setCount();
  }
</script>

<div class="page-wrapper">
  <div class="placar">
    <h1>{count}</h1>
  </div>

  <div class="buttons">
    <Button size="large" on:click={adiciona1}>+1 pontos</Button>
    <Button size="large" on:click={adiciona3}>+3 pontos</Button>
    <Button size="large" on:click={adiciona5}>+5 pontos</Button>
    <Button size="large" on:click={adiciona10}>+10 pontos</Button>
    <Button size="large" on:click={adiciona15}>+15 pontos</Button>
  </div>
  <div class="buttons">

    <Button size="large" on:click={zerarPontos}>Resetar os pontos</Button>
  </div>

</div>

<style>
  .page-wrapper {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 128, 96, 0.85);
    display: grid;
    place-items: center;
    color: white;
  }

  .placar {
    margin-inline: auto;

  }
  h1 {
    font-size: 7rem;
  }

  .buttons {
    display: grid;
    --szot-button-color: black;
    --szot-button-background-color: white;
    --szot-button-width: 100%;
    gap: 1rem;
    width: 70%;
  }
</style>
