<template>
  <b-container>
    <h1>Event Details: {{ eventId }}</h1>
    <event-detail :event="event"></event-detail>
  </b-container>
</template>

<script>
import EventDetail from '@/components/event/EventDetail.vue'
import { useEventStore } from '@/stores/event';

export default {
  name: "EventDetailView",
  props: {
    eventId: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      event: {}
    }
  },
  components: { EventDetail },
  created() {
    const store = useEventStore()

    store.loadEvents()
    this.event = store.getEventById(this.eventId)
  }
}
</script>

<style>
</style>