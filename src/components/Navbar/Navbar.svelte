<script>
  import ContactButton from "../ContactButton/ContactButton.svelte";
  import pageSeparator from "../../assets/img/page-separator.png";

  export let yPosition = 0;
</script>

<div class="nav-container">
  <div class="nav-content">
    <div class="nav-links">
      <a href="#introduction" class:selected={yPosition < 200}> Início </a>
      <a href="#portfolio" class:selected={yPosition >= 200 && yPosition < 400}>
        Portfólio
      </a>
      <a href="#about" class:selected={yPosition >= 400}> Sobre mim </a>
    </div>

    <ContactButton />
  </div>
  <img class="separator-img" src={pageSeparator} alt="Separador da navbar" />
</div>

<style lang="scss">
  .nav-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999 !important;
  }

  .nav-content {
    height: 5rem !important;
    display: flex;
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
  }

  .separator-img {
    width: 100%;
  }
</style>
