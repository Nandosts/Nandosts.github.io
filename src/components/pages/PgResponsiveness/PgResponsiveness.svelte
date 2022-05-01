<script lang="ts">
  /**
   * This page is used to test storybook responsiveness
   * and screenshot test
   */
</script>

<div class="container">
  <div class="item item-1">header</div>
  <div class="item item-2">side-left</div>
  <div class="item item-3">banner-top</div>
  <div class="item item-4">content</div>
  <div class="item item-5">side-right</div>
  <div class="item item-6">banner-bottom</div>
  <div class="item item-7">footer</div>
</div>

<style lang="scss">
  @use '../../../styles/variables/sizes.scss' as v;

  :root {
    @media only screen and (min-width: v.$mobile-devices) {
      --grid: 
        'i1' 3.75rem
        'i2' 12rem
        'i3' 12rem
        'i4' minmax(100vh, 1fr)
        'i5' 12rem
        'i6' 12rem
        'i7' 3.75rem
        /1fr;
      --font-size: 2rem;
    }
    @media only screen and (min-width: v.$tablet-devices) {
      --grid: 
        'i1     i1' 6.25rem
        'i2     i3' 12rem
        'i2     i4' minmax(50vh, 1fr)
        'i5     i4' minmax(50vh, 1fr)
        'i5     i6' 12rem
        'i7     i7' 6.25rem
        /12rem  1fr;
      --font-size: 2rem;
    }
    @media only screen and (min-width: v.$md-desktop-devices) {
      --grid: 
        'i1     i1      i1' 6.25rem
        'i2     i3      i5' 12rem
        'i2     i4      i5' minmax(100vh, 1fr)
        'i2     i6      i5' 12rem
        'i7     i7      i7' 6.25rem
        /12rem  1fr     12rem;
      --font-size: 2rem;
    }
    @media only screen and (min-width: v.$hd-desktop-devices) {
      --grid: 
        'i1     i1      i1' 6.25rem
        'i2     i3      i5' 18rem
        'i2     i4      i5' minmax(100vh, 1fr)
        'i2     i6      i5' 18rem
        'i7     i7      i7' 6.25rem
        /18rem  1fr     18rem;
      --font-size: 2rem;
    }
    @media only screen and (min-width: v.$full-desktop-devices) {
    }
    @media only screen and (min-width: v.$ultra-desktop-devices) {
    }
  }

  .container {
    display: grid;
    grid: var(--grid);
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  $bg-colors: red green blue yellow purple magenta orange;

  @for $i from 1 through length($bg-colors) {
    .item-#{$i} {
      grid-area: i#{$i};
      background-color: nth($bg-colors, $i);
      font-family: Arial, Helvetica, sans-serif;
      font-size: var(--font-size);
      font-weight: 700;
      text-transform: uppercase;
    }
  }
</style>
