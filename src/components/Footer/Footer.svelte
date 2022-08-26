<script>
  import { Button } from "szot-ui-experimental";
</script>

<footer class="footer-container">
  <div class="footer-content">
    <p class="copyrights">
      © 2022 Fernando Jorge • Todos os direitos reservados
    </p>
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
