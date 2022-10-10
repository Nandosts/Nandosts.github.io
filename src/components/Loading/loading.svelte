<div class="loading-wrapper">
  <div class="loading">
    <div />
    <div />
    <div />
  </div>
</div>

<style lang="scss">
  .loading-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading {
    display: flex;
    justify-content: center;

    div {
      width: 1rem;
      height: 1rem;

      margin: 2rem 0.5rem;
      background: #fff;

      border-radius: 50%;
      animation: 0.9s bounce infinite alternate;

      &:nth-child(2) {
        animation-delay: 0.3s;
      }

      &:nth-child(3) {
        animation-delay: 0.6s;
      }
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
</style>
