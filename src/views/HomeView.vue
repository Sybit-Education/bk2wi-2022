<template>
  <b-container>
    Willkommen bei RegioSports
    <event-list />

    <sportart-list />

  </b-container>
</template>
<script>
import EventList from "@/components/event/EventList.vue"
import SportartList from "@/components/sportart/SportartList.vue"
export default {
  name: "HomeView",
  components: {SportartList }
}
</script>

