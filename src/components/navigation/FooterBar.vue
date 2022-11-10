<template>
  <footer class="pb-5">
    <b-container class="navbar-dark">
        &copy; 2022, Regio Sports, BSZ Radolfzell.
    </b-container>
  </footer>
</template>

<script>
export default {
    name: 'FooterBar',
}
</script>


<style lang="scss">
@import '@/assets/scss/custom-vars.scss';
footer {
  color: $light;
  background-color: $dark;
  min-height: 60px;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>