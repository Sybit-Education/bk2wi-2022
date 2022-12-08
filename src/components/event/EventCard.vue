<template>
  <router-link :to="eventLink()">
    <b-card class="my-3 event-card">
      <h3>{{ event.Titel }}</h3>
      <p>{{ event.Austragungsort }}</p>
      <sportart-label v-if="event" :sportart="event.Sportart" />
    </b-card>
  </router-link>
</template>

<script>
import SportartLabel from '../sportart/SportartLabel.vue';
export default {
  name: "EventCard",
  components: { SportartLabel },
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  methods: {
    eventLink() {
      return "/event/" + this.event.id;
    }
  }
}
</script>

<style> 
.event-card
{
  color:#011584;
}

</style>
