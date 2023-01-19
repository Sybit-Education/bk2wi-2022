<template>
  <b-container>
    Willkommen bei RegioSports: <sportart-label :sportart-id="sportartId" />
    <event-list :sportart-id="sportartId" />
  </b-container>
</template>
<script>
import SportartLabel from "../components/sportart/SportartLabel.vue";
import EventList from "@/components/event/EventList.vue"

export default {
  name: "SportartView",
  components: { EventList, SportartLabel },
  props: {
    sportartId: {
      type: String,
      required: true
    }
  },
}
</script>

