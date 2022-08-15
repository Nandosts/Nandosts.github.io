<script>
  import { Button } from "szot-ui-experimental";
</script>

<footer class="footer-container">
  <div class="footer-content">
    <div class="whatsapp-contact">
      <p>Contato:</p>
      <a
        class="whatsapp-number"
        target="_blank"
        href={"https://web.whatsapp.com"
          + "/send?phone=55061998223699&text=Ol%C3%A1%2C+Fernando%21"
          + "+Vi+o+seu+portf%C3%B3lio%2C+tudo+bem+com+voc%C3%AA%3F"}
        >+55 61 99822-3699</a
      >
    </div>

    <p class="copyrights">© 2022 Fernando Jorge • All Rights Reserved</p>
    <div class="footer-links">
      <a href="https://www.linkedin.com/in/fernando-sm/" target="_blank">
        <Button
          size="round"
          icon="linkedin"
          buttonStyle="light"
          buttonStyleType="outline"
        />
      </a>
      <a href="https://www.instagram.com/fernando.jsts/" target="_blank">
        <Button
          size="round"
          icon="instagram"
          buttonStyle="light"
          buttonStyleType="outline"
        />
      </a>
      <a href="https://github.com/Nandosts" target="_blank">
        <Button
          size="round"
          icon="github"
          buttonStyle="light"
          buttonStyleType="outline"
        />
      </a>
    </div>
  </div>
</footer>

<style lang="scss">
  .footer-container {
    color: white;
  }

  .footer-content {
    height: 4rem;
    display: flex;
    justify-content: space-between;
    padding-inline: 5%;
    align-items: center;
    background: #2b3d41;

    .whatsapp-contact {
      text-align: start;

      .whatsapp-number {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
      }
    }

    .footer-links {
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
    }
  }
</style>
