<script>
  import ContactButton from "../ContactButton/ContactButton.svelte";

  export let yPosition = 0;
</script>

<div class="nav-container">
  <div class="nav-links">
    <a href="#start" class:selected={yPosition < 200}> Início </a>
    <a href="#portfolio" class:selected={yPosition >= 200 && yPosition < 400}>
      Portfólio
    </a>
    <a href="#about" class:selected={yPosition >= 400}> Sobre mim </a>
  </div>

  <ContactButton />
</div>

<style lang="scss">
  .nav-container {
    height: 5rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

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
</style>
