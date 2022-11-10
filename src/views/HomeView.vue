<template>
  <b-container>
    Willkommen bei RegioSports
    <event-list />
  </b-container>
</template>
<script>
import EventList from "@/components/event/EventList.vue"
export default {
  components: { EventList }
}
</script>

