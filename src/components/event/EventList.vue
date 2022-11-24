<template>
  <b-card-group deck>
    <event-card v-for="event in events" :key="event.id" :event="event" />
  </b-card-group>
</template>

<script>
import EventCard from './EventCard.vue'
import eventService from '../../services/event.service'

export default {
  name: 'EventList',
  components: {
    EventCard
  },
  data () {
    return {
      events: []
    }
  },
  mounted () {
    this.loadEvents()
  },
  methods: {
    async loadEvents () {
      this.events = await eventService.getList()
    },
  }
}
</script>

<style>

</style>