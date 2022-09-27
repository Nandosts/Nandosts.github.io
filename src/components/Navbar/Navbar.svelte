<script>
  import { _, locale } from "svelte-i18n";
  import { Button, SideMenu } from "szot-ui-experimental";

  import { link, location } from "svelte-spa-router";
  import * as Icon from "svelte-flag-icons";
  import { setSites } from "../pages/Home/components/Portfolio/sites.svelte";
  import ContactButton from "../ContactButton/ContactButton.svelte";
  import logoFernando from "../../assets/img/logo.svg";

  export let yPosition = 0;

  const menuItems = [
    {
      type: "item",
      icon: "icon-home",
      text: $_("nav_home"),
      path: "/#/",
    },
    {
      type: "item",
      icon: "icon-folder",
      text: $_("nav_portfolio"),
      path: "#portfolio",
    },
    {
      type: "item",
      icon: "icon-plus",
      text: $_("nav_about"),
      path: "/#/about",
    },
    {
      type: "item",
      icon: "icon-phone",
      text: $_("contact_button"),
      path: "#contact-me",
    },
  ];

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
      {#if $location === "/"}
        <a href="#introduction" class:selected={yPosition < 200}>
          {$_("nav_home")}
        </a>
        <a href="#portfolio" class:selected={yPosition >= 200}>
          {$_("nav_portfolio")}
        </a>
      {:else}
        <a href="/" use:link>{$_("nav_home")}</a>
        <a href="/" use:link>{$_("nav_portfolio")}</a>
      {/if}

      <a use:link href="/about" class:selected={$location === "/about"}>
        {$_("nav_about")}
      </a>
    </div>

    <div class="end-buttons">
      <ContactButton />

      <Button
        size="small"
        buttonStyleType="not-filled"
        on:click={() => resetLocale()}
      >
        {#if $locale === "en-US" || $locale === "en"}
          <Icon.Us size="35" />
        {:else}
          <Icon.Br size="35" />
        {/if}
      </Button>
    </div>
  </div>
  <div class="sidemenu">
    <SideMenu
      items={menuItems}
      mobileMode={true}
      collapsedLogoImg={logoFernando}
      expandedLogoImg={logoFernando}
    />
  </div>
</div>

<style lang="scss">
  @use "src/styles/variables/index.scss" as v;

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
      }
    }

    .sidemenu {
      display: var(--sidemenu-display);
      --szot-nav-background-color: #2b3d41;
      --szot-nav-txt-color: #fff;
      --szot-nav-items-hover-color: #4d666b;
    }
  }
</style>
