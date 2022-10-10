<script lang="ts">
  import PgRequest from "./PgRequest.svelte";
  import type { IUserData } from "./IUserData";

  interface IReqUserData {
    results: IUserData[];
  }

  let userDataPromise: Promise<IUserData>;

  function getUserDataPromise() {
    userDataPromise = fetch("https://randomuser.me/api/")
      .then((x) => x.json())
      .then((x: IReqUserData) => x.results[0]);
  }

  getUserDataPromise();
</script>

<PgRequest {userDataPromise} on:getRandomUser={getUserDataPromise} />
