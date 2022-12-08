<template>
  <router-link :to="eventLink()">
    <b-card class="my-3 event-card">
      <h3>{{ event.Titel }}</h3>
      <p>{{ event.Austragungsort }}</p>
    </b-card>
  </router-link>
</template>

<script>
export default {
  name: "EventCard",
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
};
</script>

<style> 
.event-card
{
  color:#011584;
}

</style>
