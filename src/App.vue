<template>
  <div id="app">
    <header>
      <nav-bar />
    </header>
    <main class="content">
      <router-view />
    </main>
    <footer>
      <footer-bar />
    </footer>
  </div>
</template>

<script>
import NavBar from './components/navigation/NavBar.vue'
import FooterBar from './components/navigation/FooterBar.vue'
import { useEventStore } from '@/stores/event'
import { useSportartStore } from '@/stores/sportart'

export default {
  components: { NavBar, FooterBar },
  setup() {
    const storeEvents = useEventStore()
    storeEvents.loadEvents()

    const storeSportarten = useSportartStore()
    storeSportarten.loadSportarts()
  }
}
</script>


<style lang="scss">
@import "@/assets/scss/custom-vars.scss";
body {
  height: 100%;
}
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .content {
    margin-top: 30px;
    flex-grow: 1;
    min-height: calc(100vh - 180px);
  }
  .navbar,
  .content,
  footer {
    flex-shrink: 0;
  }
}
</style>
