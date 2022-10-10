<script lang="ts">
  import { _, locale } from "svelte-i18n";
  // import { Button, SideMenu } from 'szot-ui-experimental';

  import { page } from "$app/stores";
  import * as Icon from "svelte-flag-icons";
  import { setSites } from "$lib/modules/translation/sites.svelte";
  import ContactButton from "$lib/components/ContactButton/ContactButton.svelte";
  // import logoFernando from '../../assets/img/logo.svg';

  export let yPosition = 0;

  // type TMenuItem = {
  // 	type: 'item';
  // 	icon: string;
  // 	text: string;
  // 	path: string;
  // };

  // const menuItems: TMenuItem[] = [
  // 	{
  // 		type: 'item',
  // 		icon: 'icon-home',
  // 		text: $_('nav_home'),
  // 		path: '/'
  // 	},
  // 	{
  // 		type: 'item',
  // 		icon: 'icon-folder',
  // 		text: $_('nav_portfolio'),
  // 		path: '#portfolio'
  // 	},
  // 	{
  // 		type: 'item',
  // 		icon: 'icon-plus',
  // 		text: $_('nav_about'),
  // 		path: '/about'
  // 	},
  // 	{
  // 		type: 'item',
  // 		icon: 'icon-phone',
  // 		text: $_('contact_button'),
  // 		path: '#contact-me'
  // 	}
  // ];

  function resetLocale() {
    if ($locale === "en-US" || $locale === "en") {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      $locale = "pt-BR";
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      setSites();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      $locale = "en-US";
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      setSites();
    }
  }
</script>

<div class="nav-container">
  <div class="nav-content">
    <div class="nav-links">
      {#if $page.url.pathname === "/"}
        <a href="#introduction" class:selected={yPosition < 200}>
          {$_("nav_home")}
        </a>
        <a href="#portfolio" class:selected={yPosition >= 200}>
          {$_("nav_portfolio")}
        </a>
      {:else}
        <a href="/">{$_("nav_home")}</a>
        <a href="/">{$_("nav_portfolio")}</a>
      {/if}

      <a href="/about" class:selected={$page.url.pathname === "/about"}>
        {$_("nav_about")}
      </a>
    </div>

    <div class="end-buttons">
      <ContactButton />

      <button class="flag-button" on:click={() => resetLocale()}>
        {#if $locale === "en-US" || $locale === "en"}
          <Icon.Us size="35" />
        {:else}
          <Icon.Br size="35" />
        {/if}
      </button>
    </div>
  </div>
</div>

<style lang="scss">
  @use "src/routes/styles/variables/index.scss" as v;

  .nav-container {
    @media only screen and (min-width: v.$mobile-devices) {
      --navbar-display: none;
      --sidemenu-display: flex;
    }

    @media only screen and (min-width: v.$tablet-devices) {
      --navbar-display: flex;
      --sidemenu-display: none;
      left: 0;
    }
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999 !important;
    border-bottom: 4px solid white;

    .nav-content {
      height: 5rem;
      display: var(--navbar-display);
      justify-content: space-between;
      padding-inline: 5%;
      align-items: center;
      background: #2b3d41;

      .nav-links {
        display: flex;
        justify-content: space-evenly;

        a {
          color: white;
          text-decoration: none;
          display: inline-block;
          padding: 10px;

          &::after {
            content: "";
            width: 0px;
            height: 2px;
            display: block;
            background: white;
            transition: 500ms;
          }
        }

        .selected::after {
          font-weight: 700;
          width: 2.6rem;
        }
      }

      .end-buttons {
        display: flex;
        gap: 1rem;
        align-items: center;

        button {
          background: none !important;
          border: none;
        }
        .flag-button {
          background: none;
          border: none;
        }
      }
    }
  }
</style>
