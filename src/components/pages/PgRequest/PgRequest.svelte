<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { IUserData } from "./IUserData";
  import Button from "../../Button/Button.svelte";

  const dispatch = createEventDispatcher();

  // user data from https://randomuser.me/
  export let userDataPromise: Promise<IUserData> | undefined;

  let disabled = true;
  $: {
    disabled = true;
    userDataPromise
      ?.catch(() => "")
      .then(() => {
        disabled = false;
      });
  }

  function getRandomUser() {
    // fired on click to render another radom user
    dispatch("getRandomUser");
  }

  function getUserFullName(userData: IUserData) {
    const userName = userData?.name;
    return userName
      ? `${userName.title} ${userName.first} ${userName.last}`
      : null;
  }

  function getUserImg(userData: IUserData) {
    return userData?.picture?.large;
  }

</script>

{#await userDataPromise}
  <p>Carregando ...</p>
{:then userData}
  <img src={ getUserImg(userData) } alt="" />
  <p>{ getUserFullName(userData) }</p>
{:catch error}
  <p>{error}</p>
{/await}

<div class:disabled>
  <Button on:click={() => !disabled && getRandomUser()} primary={true}>
    Render radom user
  </Button>
</div>

<style lang="scss">
  .disabled {
    opacity: 0.2;
    cursor: unset;
  }
</style>
